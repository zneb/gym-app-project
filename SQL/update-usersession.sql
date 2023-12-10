update users
set sessionid = gen_random_uuid()
where username = '${username}'