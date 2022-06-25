-- Up
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    f_name VARCHAR,
    l_name VARCHAR,
    phone NUMBER UNIQUE,
    username VARCHAR UNIQUE,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR,
    ig VARCHAR,
    fb VARCHAR,
    twitter VARCHAR,
    gender TEXT
);

CREATE TABLE about (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER REFERENCES user(id),
    title VARCHAR,
    education VARCHAR,
    roles VARCHAR,
    about VARCHAR
);

CREATE TABLE info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER REFERENCES user(id),
    district VARCHAR,
    sublocation VARCHAR,
    ward VARCHAR,
    origin VARCHAR,
    profession VARCHAR,
    achievements VARCHAR
);

CREATE TABLE message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    f_name VARCHAR,
    contact VARCHAR,
    messages VARCHAR,
    receiver INTEGER REFERENCES user(id)
);

CREATE TABLE enquiry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    f_name VARCHAR,
    email VARCHAR,
    l_name VARCHAR,
    messages VARCHAR
);

-- Down
DROP TABLE user;
DROP TABLE info;
DROP TABLE messages;
DROP TABLE enquiry;
DROP TABLE about;