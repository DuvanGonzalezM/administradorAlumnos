<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Alumn;

class AlumnsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listAlumns = DB::table('alumns')
            ->join('courses', 'alumns.FK_course_alumn', '=', 'courses.id_course')
            ->select('alumns.*', 'courses.name_course as course_alumn')
            ->get();
        
        return response()->json(($listAlumns), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Alumn = new Alumn();
        $Alumn->name_alumn = $request->nameAlumn;
        $Alumn->phone_alumn = $request->phoneAlumn;
        $Alumn->email_alumn = $request->emailAlumn;
        $Alumn->FK_course_alumn = $request->courseAlumn;
        $Alumn->save();

        return response()->json(($Alumn), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Alumn = DB::table('alumns')
            ->where('id_alumn', $id)
            ->first();

        return response()->json(($Alumn), 200);
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
        $Alumn = Alumn::where('id_alumn', $id)->first();        
        $Alumn->name_alumn = $request->nameAlumn;
        $Alumn->phone_alumn = $request->phoneAlumn;
        $Alumn->email_alumn = $request->emailAlumn;
        $Alumn->FK_course_alumn = $request->courseAlumn;
        $Alumn->save();

        return response()->json(($Alumn), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Alumn = Alumn::where('id_alumn', $id)->first();
        $Alumn->delete();

        return response()->json(("Ok Delete"), 200);
    }
}
