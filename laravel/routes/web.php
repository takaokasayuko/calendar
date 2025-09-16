<?php

use App\Http\Controllers\CalendarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    Route::get('/', [CalendarController::class, 'index'])->name('calendar');
    Route::post('/schedule-add', [CalendarController::class, 'store'])->name('calendar.store');
});

require __DIR__.'/auth.php';
