# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  en = Entry.create!(title:'Random title')

  en.feelings.create!(textbox: 'Spicy jalapeno rump spare ribs salami, tongue bresaola ribeye pork chop pancetta kielbasa burgdoggen hamburger swine andouille picanha. Frankfurter kevin meatball meatloaf, ham beef sausage biltong bresaola corned beef. Venison filet mignon swine porchetta ribeye flank. Shank salami chicken, shoulder capicola landjaeger pancetta pork chop. Swine sirloin strip steak chuck turkey turducken pork chop chicken, pork kielbasa shank. Tenderloin rump venison, salami capicola leberkas cupim pastrami frankfurter turducken prosciutto pig corned beef ham hock. Spare ribs cow leberkas shankle tenderloin ribeye prosciutto pork loin.', before_or_after: 0, rating: 3)

  en.feelings.create!(textbox: 'Gluten-free schlitz normcore flexitarian lyft palo santo polaroid viral four loko snackwave cray. Kickstarter crucifix cloud bread hell of four loko, food truck copper mug ugh hot chicken letterpress adaptogen air plant neutra pinterest. Affogato fashion axe echo park normcore listicle helvetica. Readymade offal tacos, raw denim pabst wayfarers seitan kitsch tofu iPhone meggings YOLO art party.', before_or_after: 1, rating: 5, created_at: Time.now+10*60)
end

user = User.new
user.email = 'user@banaynays.com'
user.password = 'bananaKing'
user.password_confirmation = 'bananaKing'
user.save

user = User.new
user.email = 'user@bananas.com'
user.password = 'bananaBro'
user.password_confirmation = 'bananaBro'
user.save
