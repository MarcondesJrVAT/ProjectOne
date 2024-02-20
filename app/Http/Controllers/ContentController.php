<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index()
    {
        return Inertia::render('Content');
    }

    public function singlePageApp()
    {
        return Inertia::render('Content/SinglePage');
    }

    public function contentCategory()
    {
        return Inertia::render('Content/Category');
    }
    public function contentCourses()
    {
        return Inertia::render('Content/Courses');
    }
    public function contentSeries()
    {
        return Inertia::render('Content/Series');
    }
    public function contentComponents()
    {
        return Inertia::render('Content/Components');
    }
    public function contentSchoolYear()
    {
        return Inertia::render('Content/SchoolYear');
    }
    public function contentClasses()
    {
        return Inertia::render('Content/Classes');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
