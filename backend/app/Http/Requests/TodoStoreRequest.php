<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseFormRequest;

class TodoStoreRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            'title'=> 'required|string|max:255',
        ];
    }
}
