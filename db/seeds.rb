5.times do
  Department.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.sentence,
  )
end

puts "Created 5 Departments"

# 10.times do
#   Product.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_f,
#     department: Faker::Commerce.department
#   )
# end

# puts "Created 10 Products"

