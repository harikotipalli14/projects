# import cv2
# video_cap=cv2.VideoCapture(0)
# while True:
#     ret,video_data =video_cap.read()
#     cv2.imshow("camera",video_data)
#     if cv2.waitKey(10) == ord("a"):
#         break
# video_cap.release()
#----------------------------------------------------------------------------
#----------------------------------------------------------------------------
# import cv2

# # load the input image
# a="hi.jpg"
# img = cv2.imread(a)

# # convert the input image to grayscale
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# # apply thresholding to convert grayscale to binary image
# cv2.imshow('image',img)
# cv2.imshow('gray',gray)

# cv2.imwrite('bunny.png',gray)
# cv2.imshow('bunny',gray)
# cv2.waitKey(0)
#----------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------------
import cv2
cam=cv2.VideoCapture(0)
c=0
while True:
    ret,video_live=cam.read()
    cv2.imshow("camera",video_live)
    if cv2.waitKey(1)==ord("a"):
        img="hari{}.jpg".format(c)
        cv2.imwrite(img,video_live)
        hari=cv2.imread(img)
        gray=cv2.cvtColor(hari,cv2.COLOR_BGR2GRAY)
        aa="subbu{}.jpg".format(c)
        cv2.imwrite(aa,gray)
        cv2.imshow('hari',gray)
        cv2.waitKey(0)
        c=c+1
    if cv2.waitKey(1)== ord("h"):
        break
  
cam.release()


