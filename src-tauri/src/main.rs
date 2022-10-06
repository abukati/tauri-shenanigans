#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::{process::id, fmt::format};
use reqwest::Error;

struct Post {
    id: i32,
    title: String,
    body: String,
    user_id: i32,
    tags: Vec<String>,
    reactions: i32
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

// #[tauri::command]
// fn fetch_files() -> Vec<File> {

//     // let file = File { id: id(), name: "slack".to_owned(), inappropriate: false };

//     // let files: [File] = [
//     //     File { id: id(), name: "slack".to_owned(), inappropriate: false };
//     //     File { id: id(), name: "safari".to_owned(), inappropriate: false };
//     //     File { id: id(), name: "porn".to_owned(), inappropriate: true };
//     //     File { id: id(), name: "discord".to_owned(), inappropriate: false };
//     // ];

//     let mut files: Vec<File> = Vec::new();
//     files.push(File::new("slack", false));


//     return files
// }

// #[tauri::command]
// fn fetch_posts() -> [Post; 1] {
//     let request_url = format!("https://dummyjson.com/posts");

//     let posts = [Post { id: 2, title: "".to_string(), body: "".to_string(), user_id: 2, tags: vec!["".to_string()], reactions: 2 }];

//     return posts

// }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
