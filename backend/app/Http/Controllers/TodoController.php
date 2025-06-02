<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use App\Services\TodoService;
use App\Http\Requests\TodoStoreRequest;

class TodoController extends Controller
{
    public function __construct(protected TodoService $todo_service)
    {
    }

    public function index(Request $request)
    {
        return $this->todo_service->index($request);
    }

    public function store(TodoStoreRequest $request)
    {
        return $this->todo_service->store($request);
    }

    public function update(Request $request, Todo $todo)
    {
        return $this->todo_service->update($todo);
    }

    public function destroy(Todo $todo)
    {
        return $this->todo_service->delete($todo);
    }
}
