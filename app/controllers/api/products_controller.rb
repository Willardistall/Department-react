class Api::ProductsController < ApplicationController
  before_action :set_department
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: @department.products
  end

  def show
    render json: @product
  end

  def create
    product = @department.items.new(product_params)

    if @product.save
      render json: product
    else
      render json: item.errors
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: item.errors
    end
  end

  def destroy
    @product.destroy
    render json: { message: "Item Removed" }
  end

  private
    def set_department
      @department = Department.find(params[:department_id])
    end

    def set_product
      @product = @department.items.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :description, :department, :price,)
    end
end