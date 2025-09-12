<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalendarAddRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Calendar;

use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Calendar',[
            'user'=> Auth::user(),
            'calendars' => Calendar::all()
        ]);
    }
}
