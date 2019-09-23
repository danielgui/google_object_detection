
function _magicwand(self) {
    self._flood_mask[:] = 0
    flags = self.connectivity | 255 << 8;   // bit shift
    flags |= cv2.FLOODFILL_FIXED_RANGE | cv2.FLOODFILL_MASK_ONLY;
    flood_image = self._image.copy();
    cv2.floodFill(flood_image, self._flood_mask, self._seed_point, 0,
                self._tolerance, self._tolerance, flags);
    self._mask = self._flood_mask[1:-1, 1:-1].copy();
    self._update_window();


}

function drawselection(self) {
    // find contours around mask
    self._selection = self._image.copy()
    self._contours = cv2.findContours(self._mask, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)[0];

    cv2.drawContours(self._selection, self._contours, -1, color=(255,255,255), thickness=-1);			  

    self._selection = cv2.addWeighted(self._image, 0.75, self._selection, 0.25, 0);  // outline contours
    //contorno    
    cv2.drawContours(self._selection, self._contours, -1, color=(0,0,255), thickness=2);

    //
    let selection = image.clone();
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    let addWeightedMat = new cv.Mat(image.rows, image.cols, image.type());
    cv.findContours(mask, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
    cv.drawContours(selection, contours, -1, [255, 255, 255, 255], -1, cv.LINE_8);
    cv.addWeighted(image, 0.75, selection, 0.25, 0, addWeightedMat);
    cv.drawContours(selection, contours, -1, [255, 255, 255, 255], 2, cv.LINE_8);

    //presenta resultados
    cv2.imshow(self.name, self._selection)
} 
/*
function update_window(self) {
    drawselection();
    cv2.imshow(self.name, self._selection)
}
*/