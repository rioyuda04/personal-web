let dataBlog = []
let dataIcon = []
let dataDuration = []

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Oktober',
  'November',
  'December'
]

function addBlog(event){
    event.preventDefault() 
    
    let projectname = document.getElementById('projectName').value
    let description = document.getElementById('descript').value

    // get icon with image
    // let addressNodejs = document.getElementById('iconNodejs').src
    // let SrcBlob = []
    // fetch(addressNodejs)
    // .then(res => res.blob()).then(blob =>{
    //     let blobNodejs = URL.createObjectURL(blob)
    //     let imgNodejs = new Image()
    //     imgNodejs.src = blobNodejs
    //     document.getElementById('iconNodejs').appendChild(imgNodejs)
    //     let dataBlob = {
    //         blobNodejs
    //     }
    //     SrcBlob.push(dataBlob)
    // })
    // console.log(SrcBlob)

    // call function duration startdate - enddate
    durationDate()
    
    // call function get icon with fontawesome
    getIcon()

    // get image 
    let image = document.getElementById('choose')
    
    image = URL.createObjectURL(image.files[0])
    // createObjectURL(image.files[0])
    // console.log(image)

    let blog = {
        author : `Admin`,
        projectname,
        description,
        image,
        // postedAt: new Date()
    }
    
    dataBlog.push(blog)

    renderBlog()
}

function durationDate(){
    // init get value startdate and enddate
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value

    // init data startdate
    let createStartDate = new Date(startDate)
    let getStartYear = createStartDate.getFullYear()
    let getStartMonth = createStartDate.getUTCMonth() + 1
    let getStartDay = createStartDate.getUTCDate()

    console.log(`startdate = ` + getStartDay +`/`+ getStartMonth +`/`+ getStartYear )

    let createEndDate = new Date(endDate)
    let getEndYear = createEndDate.getFullYear()
    let getEndMonth = createEndDate.getUTCMonth() + 1
    let getEndDay = createEndDate.getUTCDate() 

    console.log(`enddate = ` + getEndDay +`/`+ getEndMonth +`/`+ getEndYear )

    // init distance
    let DistanceYear = getEndYear - getStartYear
    let DistanceMonth = getEndMonth - getStartMonth
    let DistanceDay = getEndDay - getStartDay

    console.log(DistanceDay)
    // get data duration
    let dataYear = ` `
    let dataMonth = ` `
    let dataDay = ` `
    if ( DistanceYear >= 1 ){
        dataYear = `duration : ${DistanceYear} Year more`
    }else{ dataYear = ` ` }
    if ( DistanceMonth >= 1 ){
        dataMonth = `duration : ${DistanceMonth} Month more`
    }else{ dataMonth = ` `}
    if ( DistanceDay >= 1 ){
        dataDay = `duration : ${DistanceDay} Day more`
    }else{ dataDay = ` `}

    // Protection Post If Start Date Less than End Date
    if ( DistanceYear || DistanceMonth || DistanceDay < 0 ) {
        alert('Sorry, Start Date must less than End Date!!\n Please, try again thanks')
        addBlog() 
    }
    // End
    
    let upDataDuration = {
        dataYear,
        dataMonth,
        dataDay
    } 
    dataDuration.push(upDataDuration)

    // console.table(dataDuration)

}

function getIcon() {
    // Logic get Icon Condition and showing
    // init element Android
    let initIconAndroid = document.getElementById('iconAndroid')
    let insertIconAndroid = initIconAndroid.innerHTML += `<i id="iconAndroid" class="fa fa-android"></i>`
    
    //get value checkbox android
    let checkAndroid = document.getElementById('android')
    let ValueAndroid = checkAndroid.value
    if ( checkAndroid.checked == true ){
        ValueAndroid = "andorid"
        insertIconAndroid
    }else{
        ValueAndroid = ` `
        insertIconAndroid = ` `
    }
    // init element Apple
    let initIconApple = document.getElementById('iconApple')
    let insertIconApple = initIconApple.innerHTML += `<i id="iconApple" class="fa fa-apple"></i>`
    
    //get value checkbox Apple
    let checkApple = document.getElementById('apple')
    let ValueApple = checkApple.value
    if ( checkApple.checked == true ){
        ValueApple = "apple"
        insertIconApple
    }else{
        ValueApple = ` `
        insertIconApple = ` `
    }
    // init element Windows
    let initIconWindows = document.getElementById('iconWindows')
    let insertIconWindows = initIconWindows.innerHTML += `<i id="iconWindows" class="fa fa-windows"></i>`
    
    //get value checkbox Windows
    let checkWindows = document.getElementById('windows')
    let ValueWindows = checkWindows.value
    if ( checkWindows.checked == true ){
        ValueWindows = "windows"
        insertIconWindows
    }else{
        ValueWindows = ` `
        insertIconWindows = ` `
    }
    // init element Linux
    let initIconLinux = document.getElementById('iconLinux')
    let insertIconLinux = initIconLinux.innerHTML += `<i id="iconLinux" class="fa fa-linux"></i>`
    
    //get value checkbox Linux
    let checkLinux = document.getElementById('linux')
    let ValueLinux = checkLinux.value
    if ( checkLinux.checked == true ){
        ValueLinux = "linux"
        insertIconLinux
    }else{
        ValueLinux = ` `
        insertIconLinux = ` `
    }
    // End Logic get icon condition and showing

    // insert data to global variabel 
    let insertDataIcon = {
        ValueAndroid,
        insertIconAndroid,
        ValueApple,
        insertIconApple, 
        ValueWindows,
        insertIconWindows,
        ValueLinux,
        insertIconLinux
    }
    dataIcon.push(insertDataIcon)

    // console.log(ValueAndroid)
    // console.log(insertIconAndroid)

    // console.table(dataIcon)
}

function renderBlog() { 
    let lengthData = dataBlog.length

    let blogContent = document.getElementById('contents')

    blogContent.innerHTML = firstBlogContent()
    
    let i = 0
    for (i; i < lengthData; i++){
        // console.table(dataBlog[i])
        // console.log(`nilai index nya = ${i}`)
        blogContent.innerHTML += `
            <div class="pj-view">
                <div class="p-img">
                    <div id="showicon"></div>
                    <img src="${dataBlog[i].image}" alt="photo"/>
                </div>
                <!-- Group Project Name and Duration -->
                <div class="group-n-d">
                    <div class="p-name">
                        <label for="">
                            ${dataBlog[i].projectname}
                        </label>
                    </div>
                    <div class="p-duration">
                        <label for="">
                            ${dataDuration[i].dataYear} 
                            ${dataDuration[i].dataMonth} 
                            ${dataDuration[i].dataDay}
                        </label>
                    </div>
                </div>
                <!-- End -->
                <!-- Group Project Description, Icon, Button -->
                <div class="group-d-i">
                    <div class="p-descript">
                        <p>
                            ${dataBlog[i].description}
                        </p>
                    </div>
                    <div class="p-icon-tech" id="createIcon">
                        ${dataIcon[i].insertIconAndroid}
                        ${dataIcon[i].insertIconApple}
                        ${dataIcon[i].insertIconWindows}
                        ${dataIcon[i].insertIconLinux}
                    </div>
                </div>
                <div class="p-btn">
                    <button type="button" name="edit">edit</button>
                    <button type="button" name="delete">delete</button>
                </div>
                <!-- End -->
            </div>`
    }
}

function getFullTime(time){
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()
  
  let hours = time.getHours()
  let minutes = time.getMinutes()

  return `${date} ${month[monthIndex]} ${year}  ${hours}:${minutes} WIB `
}

function getDistanceTime(time){
  // time (now) post 
  const distance = new Date() - new Date(time)
  // convert to day
  const miliseconds = 1000
  const secondsInMinute = 60
  const minutesInHour = 60
  const secondsInHour = secondsInMinute * minutesInHour
  const hoursInDay = 23

  let dayDistance = distance / ( miliseconds * secondsInHour * hoursInDay )
  //
  if (dayDistance >=1){
    return Math.floor(dayDistance) + 'days ago'
  }else{
    const hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
    if (hourDistance > 0){
      return hourDistance + ' hour ago '
    }else {
      const minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
      return minuteDistance + ' minute ago '
    }
  }
}

function firstBlogContent(){
    return `<div class="pj-view">
                <div class="p-img">
                    <img src="assets/images/laptop.jpg" alt="photo">
                </div>
                <!-- Group Project Name and Duration -->
                <div class="group-n-d">
                    <div class="p-name">
                        <label for="">
                            Dumbways Mobile App - 2021
                        </label>
                    </div>
                    <div class="p-duration">
                        <label for="">
                            duration : 3 month
                        </label>
                    </div>
                </div>
                <!-- End -->
                <!-- Group Project Description, Icon, Button -->
                <div class="group-d-i">
                    <div class="p-descript">
                        <p>
                            App that used for dumbways student, it was
                            deployed and can downloaded on playstore.
                            Happy download
                        </p>
                    </div>
                    <div class="p-icon-tech" id="createIcon">
                    <i id="iconAndroid" class="fa fa-android"></i>
                    <i id="iconApple" class="fa fa-apple"></i>
                    <i id="iconWindows" class="fa fa-windows"></i>
                    <i id="iconLinux" class="fa fa-linux"></i>
                    </div>
                </div>
                <div class="p-btn">
                    <button type="button" name="edit">edit</button>
                    <button type="button" name="delete">delete</button>
                </div>
                <!-- End -->
            </div>`
}


// setInterval(function(){
//   renderBlog()
// }, 1000)
