# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.new([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.new(name: 'Luke', movie: movies.first)


user1 = User.create(first_name: 'Karthick' , last_name: 'Mahalingam', email: 'itkarthick@hotmail.com', password: 'karthick')
user2 = User.create(first_name: 'Karthick', last_name: 'Maha',  email: 'thegreat.karthick@gmail.com', password: 'karthick')
user3 = User.create(first_name: 'Karthick', last_name: 'M', email: 'itkarthickmaha@gmail.com', password: 'karthick')

question1 = user1.questions.create(question: 'Which actor played a FedEX employee that became marooned on an island in the 2000 drama film Cast Away?')
question2 = user1.questions.create(question: 'In what year did the great fire of London take place?')
question3 = user1.questions.create(question: 'What is the only U.S. state without a rectangular flag?')
question4 = user2.questions.create(question: 'What is the most visited museum in Europe?')
question5 = user2.questions.create(question: 'When playing three-card poker, what is the highest hand one can have?')
question6 = user2.questions.create(question: 'A Shakespearean sonnet consists of how many lines?')
question7 = user3.questions.create(question: 'Houses of the Holy is the fifth studio album by which English rock band?')
question8 = user3.questions.create(question: 'How many red stripes are there on the United States flag?')
question9 = user3.questions.create(question: 'What is the name for the longest side of a right triangle?')


que1_choice1 = question1.choices.create(quiz_options: 'Tom Hanks')
que1_choice2 = question1.choices.create(quiz_options: 'Tom Cruise')
que1_choice3 = question1.choices.create(quiz_options: 'Tom Hilfigur')
que1_choice4 = question1.choices.create(quiz_options: 'Tom Victor')
question1.answers.create(choice_id: que1_choice1.id)

que2_choice1 =  question2.choices.create(quiz_options: '1666')
que2_choice2 =  question2.choices.create(quiz_options: '1667')
que2_choice3 =  question2.choices.create(quiz_options: '1668')
que2_choice4 =  question2.choices.create(quiz_options: '1669')
question2.answers.create(choice_id: que2_choice1.id)

que3_choice1 =  question3.choices.create(quiz_options: 'Ohio')
que3_choice2 =  question3.choices.create(quiz_options: 'California')
que3_choice3 =  question3.choices.create(quiz_options: 'Florida')
que3_choice4 =  question3.choices.create(quiz_options: 'Texas')
question3.answers.create(choice_id: que3_choice1.id)

que4_choice1 =  question4.choices.create(quiz_options: 'Loure')
que4_choice2 =  question4.choices.create(quiz_options: 'Paris')
que4_choice3 =  question4.choices.create(quiz_options: 'France')
que4_choice4 =  question4.choices.create(quiz_options: 'Ireland')
question4.answers.create(choice_id: que4_choice1.id)
question4.answers.create(choice_id: que4_choice2.id)
question4.answers.create(choice_id: que4_choice3.id)

que5_choice1 =  question5.choices.create(quiz_options: 'Two pair')
que5_choice2 =  question5.choices.create(quiz_options: 'A Full House')
que5_choice3 =  question5.choices.create(quiz_options: 'Three of a kind')
que5_choice4 =  question5.choices.create(quiz_options: 'Straight Flush')
question5.answers.create(choice_id: que5_choice4.id)

que6_choice1 =  question6.choices.create(quiz_options: '14')
que6_choice2 =  question6.choices.create(quiz_options: '13')
que6_choice3 =  question6.choices.create(quiz_options: '12')
que6_choice4 =  question6.choices.create(quiz_options: '11')
question6.answers.create(choice_id: que6_choice1.id)

que7_choice1 =  question7.choices.create(quiz_options: 'Led Zeppelin')
que7_choice2 =  question7.choices.create(quiz_options: 'Lead Engine')
que7_choice3 =  question7.choices.create(quiz_options: 'Led Chappelin')
que7_choice4 =  question7.choices.create(quiz_options: 'Led Timber')
question7.answers.create(choice_id: que7_choice1.id)

que8_choice1 =  question8.choices.create(quiz_options: '7')
que8_choice2 =  question8.choices.create(quiz_options: '8')
que8_choice3 =  question8.choices.create(quiz_options: '9')
que8_choice4 =  question8.choices.create(quiz_options: '10')
question8.answers.create(choice_id: que8_choice1.id)

que9_choice1 =  question9.choices.create(quiz_options: 'Hypotenuse')
que9_choice2 =  question9.choices.create(quiz_options: 'Adjacent')
que9_choice3 =  question9.choices.create(quiz_options: 'Side')
que9_choice4 =  question9.choices.create(quiz_options: 'None')
question9.answers.create(choice_id: que9_choice1.id)


tag1 = Tag.create(topic: 'Technology')
tag2 = Tag.create(topic: 'Science')
tag3 = Tag.create(topic: 'Sports')
tag4 = Tag.create(topic: 'Politics')
tag5 = Tag.create(topic: 'Universe')
tag6 = Tag.create(topic: 'History')
tag7 = Tag.create(topic: 'Mathematics')
