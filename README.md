# botsburgh.github.io
This is a website built to make Autonomous Paths for our robot. Requires the use of the OTOS sensor.

How to use:
    The first click on the map should be the robots starting position, and every click afterwards will be a point it will go to.
    Once you are done with the path, click on the Download Auto button to download an autonomous file
    Put the downloaded file under the Autonomous folder (Rename it for convinence if you are going to have multiple auto paths)
    Heading values will have to be manually put in
    All non-drivetrain movement will have to be manually put in

How to maintain:
    Every year, a new image of the field will be released. Download this image and put it in the project.
    Delete the previous years field image.
    In line 102, in index, replace the prevoius years image source with the new one
    Save and push
    