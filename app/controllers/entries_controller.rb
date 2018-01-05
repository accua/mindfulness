class EntriesController < ApiController
  before_action :set_entry, only: [:show, :update, :destroy]

  # GET /entries
  def index
    @entries = Entry.all
    render json: @entries.to_json(include:[:feelings])
  end

  # GET /entries/1
  def show
    @entry = Entry.find(params[:id])
    render json: @entry.to_json(include:[:feelings])
  end

  # POST /entries
  def create
    @entry = Entry.new(entry_params)
    @entry.feelings.new(beforeFeeling_params)
    @entry.feelings.new(afterFeeling_params)

    if @entry.save
      render json: @entry, status: :created, location: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entries/1
  def update
    @entry = Entry.update(entry_params)
    @entry.feelings.update(feeling_params)

    if @entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def entry_params
      params.require(:entry).permit(:title)
    end
    def beforeFeeling_params
      params.require(:beforeFeeling).permit(:before_or_after, :rating, :textbox)
    end
    def afterFeeling_params
      params.require(:afterFeeling).permit(:before_or_after, :rating, :textbox)
    end
end
