SELECT t.ticket_id, t.title FROM user_ticket t
JOIN user_info u ON u.user_id = t.user_id
WHERE u.user_id = $1;

