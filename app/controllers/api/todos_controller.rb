class Api::TodosController < ApplicationController
  def create
    # p "LOOK AT ME, RIGHT HERE!!!!!"
    @todo = Todo.create!(todo_params)
    render json: @todo

  end

  def show
    @todo = Todo.find_by(params[:id])
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def destroy
    @todo = Todo.find_by(params[:id])
    @todo.destroy!
    render json: @todo
  end

  def update
    @todo = Todo.find_by(params[:id])
    p "todo: " + @todo.to_s
    @todo.update!(todo_params)
    render json: @todo
  end

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
