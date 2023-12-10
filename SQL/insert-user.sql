insert into users (username, password, sessionid)
values
('${username}', '${password}', gen_random_uuid());