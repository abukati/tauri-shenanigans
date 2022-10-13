#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use scan_dir::ScanDir;
use rmp_serde::{Deserializer, Serializer};
use serde::{Serialize, Deserialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct File {
    name: String,
    file_size: String,
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn scan_folder() -> Vec<HashMap<String, String>> {
    let mut files: Vec<HashMap<String, String>> = Vec::new();

    ScanDir::files().read("../../../../../Downloads", |iter| {
        for (entry, name) in iter {
            println!("File {:?} has path {:?}, metadata {:?}", name, entry.path(), entry.metadata().unwrap());
            
            let file_size: String = entry.metadata().unwrap().len().to_string();
            let mut buf: Vec<u8> = Vec::new();
            let mut val: HashMap<&str, String> = HashMap::new();

            val.insert("name", name);
            val.insert("file_size", file_size);
            val.serialize(&mut Serializer::new(&mut buf)).unwrap();

            let test: HashMap<String, String> = Deserialize::deserialize(&mut Deserializer::new(&buf[..])).unwrap();

            files.push(test);
        }
    }).unwrap();
    files



    // ScanDir::dirs().read("../../../../../Downloads", |iter| {
    //     for (entry, name) in iter {
    //         println!("File {:?} has path {:?}, metadata {:?}", name, entry.path(), entry.metadata().unwrap());
    //     }
    // }).unwrap();
    // for entry_res in read_dir(".").unwrap() {
    //     let entry = entry_res.unwrap();
    //     let file_name_buf = entry.file_name();
    //     let file_name = file_name_buf.to_str().unwrap();
    //     if !file_name.starts_with(".") &&
    //         entry.file_type().unwrap().is_dir()
    //     {
    //         println!("File {:?} has full path {:?}",
    //             file_name, entry.path());
    //     }
    // }
}

#[tauri::command]
fn greet() -> String {
    format!("Hello")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, scan_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
