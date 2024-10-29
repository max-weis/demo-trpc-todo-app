CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todos (title, description, is_completed) VALUES
('Buy groceries', 'Milk, eggs, bread', FALSE),
('Prepare presentation', 'Slides for team meeting on Friday', TRUE),
('Read book', 'Finish reading "Effective Go"', FALSE),
('Clean workspace', 'Organize desk and shelves', FALSE),
('Exercise', 'Go for a 30-minute run', TRUE);
