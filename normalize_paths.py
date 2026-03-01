import os
import shutil

base_path = r'c:\Users\sarve\OneDrive\Desktop\flovpalgreenspace\jan_version\src\assets'
old_team_dir = os.path.join(base_path, 'team_members')
new_team_dir = os.path.join(base_path, 'team-members')

# 1. Rename folder for safety if it exists
if os.path.exists(old_team_dir):
    if os.path.exists(new_team_dir):
        shutil.rmtree(new_team_dir)
    os.rename(old_team_dir, new_team_dir)

# 2. Rename all files inside to lowercase
for filename in os.listdir(new_team_dir):
    old_file_path = os.path.join(new_team_dir, filename)
    new_filename = filename.lower()
    if new_filename.endswith('.jpeg'):
        new_filename = new_filename.replace('.jpeg', '.jpg')
    new_file_path = os.path.join(new_team_dir, new_filename)
    if old_file_path != new_file_path:
        if os.path.exists(new_file_path):
            os.remove(new_file_path)
        os.rename(old_file_path, new_file_path)
    print(f"Renamed {filename} -> {new_filename}")

# 3. Handle our_story4.jpg (already lower? check anyway)
os_path = os.path.join(base_path, 'our_story4.jpg')
if os.path.exists(os_path):
    print("our_story4.jpg is also present")
