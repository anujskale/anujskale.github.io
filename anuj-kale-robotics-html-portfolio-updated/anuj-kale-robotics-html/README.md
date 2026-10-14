# Anuj Kale Robotics Portfolio

Static multi-page website built with HTML, CSS and JavaScript. No build tools or framework required.

## Publish on GitHub Pages
Upload the contents of this folder to the root of `anujskale.github.io`. Keep the existing `images/` folder and the `Anuj_Kale_Resume.pdf` file. Commit changes to the branch configured for GitHub Pages.

## Résumé
Place the current PDF in the repository root and name it exactly `Anuj_Kale_Resume.pdf`. The home and contact pages link to that file. Replace the PDF whenever the résumé changes.

## Add project photos
Put images in `images/`. Existing gallery prefixes are declared in each HTML file using `data-prefix`. For example, Omokai uses `omokai1.png`, `omokai2.jpg`, etc. Number images consecutively starting at 1. Supported image types: PNG, JPG, JPEG and WebP.

Certificate prefixes: `mlsafetycer`, `fleetcer`, `ros2l1`, `ros2l2`. A certificate can be `images/ros2l1.png`, or a numbered series such as `images/ros2l1.png`, `images/ros2l2.png` only if that prefix does not conflict with the certificate prefixes. For multiple certificate pages use `ros2l1.png`, `ros2l11.png`, etc. Prefer one image per certificate when possible.

## Add videos
Videos are supported in project galleries. Name them sequentially with the same prefix, such as `images/xlr81.mp4` or `images/omokai2.webm`. Supported video formats are MP4 and WebM. Browsers can play the videos in the gallery using built-in controls. Keep video files compressed for GitHub Pages and avoid very large uploads.

If you want a video embedded directly in a project page rather than inside the gallery, add a standard HTML `<video controls playsinline>` element and point its `src` at a file under `images/`.

## Add a page or update content
1. Duplicate an existing HTML page and rename it, for example `project-new-robot.html`.
2. Update the page title, heading, content, gallery prefix and links.
3. Add a link to the new page in the navigation or `projects.html` so visitors can find it.
4. Shared design is in `style.css`; gallery and interaction logic is in `app.js`.
5. Commit and push the files. GitHub Pages publishes the update automatically after its deployment finishes.

## Job simulation accuracy
The three simulations are explicitly described as educational simulations, not employment. ProoV evaluation reports are represented using the supplied score and feedback details. Do not describe these as official projects or employment with the scenario companies.
