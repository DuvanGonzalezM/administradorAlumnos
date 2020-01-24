<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alumn extends Model
{
    protected $table='alumns';
    protected $fillable = ['name_alumn','phone_alumn','email_alumn','FK_course_alumn','created_at','updated_at'];
    protected $primaryKey = 'id_alumn';

    public function Courses(){
    	return $this->belongsTo('App\Course','id_courses');
    }
}
