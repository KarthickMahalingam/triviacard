
[1mFrom:[0m /home/karthick/shadow_health/trivia/spec/controllers/users/registrations_controller_spec.rb @ line 19 :

    [1;34m14[0m:       path = controller.after_sign_up_path_for user
    [1;34m15[0m:       expect(path).to eq dashboard_index_path
    [1;34m16[0m:     [32mend[0m
    [1;34m17[0m: 
    [1;34m18[0m:     it [31m[1;31m'[0m[31mshould create a user[1;31m'[0m[31m[0m [32mdo[0m
 => [1;34m19[0m:       binding.pry
    [1;34m20[0m:       post [33m:create[0m, [35muser[0m: user.attr
    [1;34m21[0m:     [32mend[0m
    [1;34m22[0m:   [32mend[0m
    [1;34m23[0m: [32mend[0m

