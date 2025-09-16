<?php

use App\Http\Controllers\CalendarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    Route::get('/', [CalendarController::class, 'index'])->name('calendar');
    Route::post('/schedule-add', [CalendarController::class, 'store'])->name('calendar.store');
    Route::put('/schedule/{calendar}/update', [CalendarController::class, 'update'])->name('calendar.update');
    Route::delete('/schedule/{calendar}/destory', [CalendarController::class, 'destroy'])->name('calendar.destroy');
});

require __DIR__.'/auth.php';
