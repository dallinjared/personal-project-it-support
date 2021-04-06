INSERT INTO user_info (username, password, first_name, last_name, birthday, email, phone_number, is_admin)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;