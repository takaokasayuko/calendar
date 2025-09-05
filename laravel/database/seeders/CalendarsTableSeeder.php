<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Calendar;
use Carbon\Carbon;

class CalendarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $date = Carbon::now();

        Calendar::create([
            'user_id' => 1,
            'title' => '会議',
            'start' => $date,
        ]);

        Calendar::create([
            'user_id' => 1,
            'title' => '出張',
            'start' => $date,
            'end' => $date->addDay(3),
        ]);

        Calendar::create([
            'user_id' => 1,
            'title' => 'ランチ',
            'start' => $date,
        ]);

        Calendar::create([
            'user_id' => 1,
            'title' => '美容院',
            'start' => $date->addDay(5),
        ]);
    }
}
