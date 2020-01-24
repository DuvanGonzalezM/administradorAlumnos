<?php

use Illuminate\Database\Seeder;
use App\Alumn;

class AlumnsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Alumn = new Alumn();
        $Alumn->name_alumn = "Jose Ramirez";
        $Alumn->phone_alumn = "322 839 2321";
        $Alumn->email_alumn = "jramirez@gmail.com";
        $Alumn->FK_course_alumn = 1;
        $Alumn->save();

        $Alumn = new Alumn();
        $Alumn->name_alumn = "Pablo Perez";
        $Alumn->phone_alumn = "320 459 2612";
        $Alumn->email_alumn = "pablito@gmail.com";
        $Alumn->FK_course_alumn = 2;
        $Alumn->save();

        $Alumn = new Alumn();
        $Alumn->name_alumn = "Camila Marquez";
        $Alumn->phone_alumn = "315 184 5258";
        $Alumn->email_alumn = "camarquez@gmail.com";
        $Alumn->FK_course_alumn = 3;
        $Alumn->save();

        $Alumn = new Alumn();
        $Alumn->name_alumn = "Arley Gonzalez";
        $Alumn->phone_alumn = "322 739 2232";
        $Alumn->email_alumn = "argonzalez@gmail.com";
        $Alumn->FK_course_alumn = 1;
        $Alumn->save();

        $Alumn = new Alumn();
        $Alumn->name_alumn = "Miguel Gomez";
        $Alumn->phone_alumn = "321 301 1102";
        $Alumn->email_alumn = "miguelito@gmail.com";
        $Alumn->FK_course_alumn = 2;
        $Alumn->save();

        $Alumn = new Alumn();
        $Alumn->name_alumn = "Maria Tovar";
        $Alumn->phone_alumn = "313 231 0921";
        $Alumn->email_alumn = "mato@gmail.com";
        $Alumn->FK_course_alumn = 1;
        $Alumn->save();
    }
}
