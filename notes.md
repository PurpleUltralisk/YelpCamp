## Upload Image Notes

By default, we cannot storage large sized files in our database.
Instead we will need to upload the photos to an online repository and then store the URL to the image in our database.
To upload image there are a number of things we need to do:

1. Change HTML form to enable `multipart/form-data`
2. Allow file upload in input

```HTML
<form action="/campgrounds" method="POST" enctype="multipart/form-data">
    <input type="file" name="image" >
</form>
```

3. We also have to parse the file encoding. We can use `multer` middleware for this.
4. To store the files to Cloudinary we will also use the packages: `cloudinary` and `multer-storage-cloudinary`.
