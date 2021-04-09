CREATE TABLE user_info (
user_id SERIAL PRIMARY KEY,
username VARCHAR(250) NOT NULL,
password VARCHAR(250) NOT NULL,
first_name VARCHAR(250) NOT NULL,
last_name VARCHAR(250) NOT NULL,
birthday DATE NOT NULL,
email VARCHAR(250) NOT NULL,
profile_pic VARCHAR(3000),
phone_number INTEGER,
is_admin BOOLEAN
);