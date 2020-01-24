<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table='courses';
    protected $fillable = ['name_course','created_at','updated_at'];
    protected $primaryKey = 'id_course';

    public function Alumns(){
    	return $this->hasMany('App\Alumn', 'id_alumn', 'id');
    }
}
