<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalendarAddRequest;
use App\Http\Requests\CalendarUpdateRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Calendar;
use Carbon\Carbon;


class CalendarController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Calendar',[
            'user'=> Auth::user(),
            'calendars' => Calendar::all()
        ]);
    }

    public function store(CalendarAddRequest $request): RedirectResponse
    {
        $start = Carbon::parse($request->input('start'));
        $end = Carbon::parse($request->input('end'));
        Calendar::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'start' => $start,
            'end' => $end
        ]);
        return back();
    }

    public function update(CalendarUpdateRequest $request, $calendar): RedirectResponse
    {
        Calendar::find($calendar)->update($request->only([
            'title'
        ]));

        return back();
    }
}
