const path = require('path');


const uploadSingleFile = async (fileObject) => {


    if (!fileObject || !fileObject.name) {
        return {
            status: "that bai",
            path: null,
            error: "Đối tượng file không hợp lệ hoặc thiếu thuộc tính 'name'"
        }
    }
    let uploadPath = path.resolve(__dirname, "../public/images/upload/")

    // get img extension
    let extName = path.extname(fileObject.name)

    // get image's name 
    let baseName = path.basename(fileObject.name, extName)

    // create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}`

    console.log(">>> finalPath: ", finalPath);

    try {
        await fileObject.mv(finalPath)
        let relativePath = finalPath.replace(path.resolve(__dirname, "../public"), "");
        return {
            status: "thanh cong",
            path: relativePath,
            error: null
        }
    } catch (err) {
        console.log(">> check err: ", err);
        return {
            status: "that bai",
            path: null,
            error: JSON.stringify(err)
        }
    }
}

module.exports = {
    uploadSingleFile,

}