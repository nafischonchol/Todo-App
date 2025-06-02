<?php

namespace App\Http\Controllers;

use App\Services\TodoService;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function __construct(protected TodoService $todo_service)
    {
    }

    public function index(Request $request)
    {
        return $this->todo_service->index($request);
    }
}
