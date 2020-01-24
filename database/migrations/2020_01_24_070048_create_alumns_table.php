<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlumnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumns', function (Blueprint $table) {
            $table->bigIncrements('id_alumn');
            $table->string('name_alumn');
            $table->string('phone_alumn');
            $table->string('email_alumn');
            $table->timestamps();
            $table->bigInteger('FK_course_alumn')->unsigned()->index();
            $table->foreign('FK_course_alumn')->references('id_course')->on('courses')->onDelete('cascade');
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alumns');
    }
}
