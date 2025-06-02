<?php

namespace App\Services;

use App\Models\Todo;

class TodoService
{
    public function index($request)
    {
        $todos = Todo::select("id","title","is_completed")
        ->get();

        return response()->json($todos);
    }
}
