INSERT INTO user_info (first_name, last_name, birthday, email, phone_number, username, hash, isAdmin)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;