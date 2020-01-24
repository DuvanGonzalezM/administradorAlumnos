<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Course;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listCourses = DB::select('select courses.*, (select COUNT(*) from alumns where FK_course_alumn=courses.id_course) as alumns_course from courses group by courses.id_course');

        return response()->json(($listCourses), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Course = new Course();
        $Course->name_course = $request->nameCourse;
        $Course->save();

        return response()->json(($Course), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Course = DB::table('courses')
            ->where('id_course', $id)
            ->first();

        return response()->json(($Course), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $Course = Course::where('id_course', $id)->first();        
        $Course->name_course = $request->nameCourse;
        $Course->save();

        return response()->json(($Course), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Course = Course::where('id_course', $id)->first();
        $Course->delete();

        return response()->json(("Ok Delete"), 200);
    }
}
