class Api::CommentsController < ApplicationController
  before_action :set_product
# ***********DO I NAME IT COMMENTS OR REVIEWS???******
  def new
    @comment = Comment.new
  end

  def create
    @comment = @product.comments.new(comment_params)
    if @comment.save
      redirect_to sub_topic_path(@topic.sub_id, @topic)
    else
      render :new
    end
  end

  private
    def set_topic
      @topic = Topic.find(params[:topic_id])
    end

    def comment_params
      params.require(:comment).permit(:body, :author)
    end
