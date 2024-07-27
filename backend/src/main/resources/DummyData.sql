

-- Sample appUser data
INSERT INTO app_user (id, username, password, roles) VALUES (nextval('user_seq'),'Nabukodonozor','$2a$12$il/vKmowLAcKS3n3JNPhCetynI.m7ZNfqAOz6.pJjS/6NVK7S/0lK', '{1}');


-- Sample workHours data
INSERT INTO work_hours(id, name, monthly_hours, number_of_hours_per_day_off) VALUES (nextval('work_hours_seq'), 'Full-Time', 174, 8);
INSERT INTO work_hours(id, name, monthly_hours, number_of_hours_per_day_off) VALUES (nextval('work_hours_seq'), 'Part-Time', 72, 3.6);


-- Sample employee data
INSERT INTO employee (id, name,  able_to_work_independently, app_user_id, work_hours) VALUES (nextval('employee_seq'), 'John Doe', true, 1, 1);
INSERT INTO employee (id, name,  able_to_work_independently, app_user_id, work_hours) VALUES (nextval('employee_seq'), 'Jane Doe', false, 1, 2);