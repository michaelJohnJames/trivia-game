class QuestionsController < ApplicationController
  def index
    @questions = HTTParty.get('http://jservice.io/api/random', :headers => {'Content-Type' => 'application/json'})

  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
