<?php

use Illuminate\Database\Seeder;
use App\Course;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Course = new Course();
        $Course->name_course = "Gastronomia";
        $Course->save();

        $Course = new Course();
        $Course->name_course = "Programación";
        $Course->save();

        $Course = new Course();
        $Course->name_course = "Finanzas";
        $Course->save();
    }
}
