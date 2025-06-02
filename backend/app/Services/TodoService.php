<?php

namespace App\Services;

use App\Models\Todo;

class TodoService
{
    public function index($request)
    {
        $todos = Todo::select("id","title","is_completed")
        ->latest("id")
        ->get();
        return response()->json($todos);
    }

    public function store($request)
    {
        $todo = Todo::create($request->validated());
        return response()->json($todo);  
    }

    public function update(Todo $todo)
    {
        $todo->update([
            'is_completed'=> !$todo->is_completed
        ]);
        return response()->json($todo->is_completed);
    }

    public function delete($todo)
    {
        $todo->delete();
        return response()->json('Successfully deleted!');
    }

}
