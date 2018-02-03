class QuestionsController < ApplicationController
  def index

  @response = HTTParty.get("http://jservice.io/api/random.json").parsed_response
#puts @response., @response.code, @response.message, @response.headers.inspect
    #respond_to do |format|
      #format.JSON { render :json => JSON.parse(@response) }
      #format.html { render "index.html.erb"}
    #end
  @question = @response[0].question
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
