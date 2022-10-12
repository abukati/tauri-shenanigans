#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use scan_dir::ScanDir;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn scan_folder() {
    ScanDir::dirs().read(".", |iter| {
        for (entry, name) in iter {
            println!("File {:?} has path {:?}, metadata {:?}", name, entry.path(), entry.metadata().unwrap());
        }
    }).unwrap();
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

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![scan_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
