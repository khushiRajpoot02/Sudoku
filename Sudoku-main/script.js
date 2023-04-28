
        var grid=[]
        var isEasy=true
        var isMedium=false
        var isHard=false
        var medium=[
            ['','','','',3,1,'','',''],['','',7,6,4,'','',8,''],['','',3,'','','','','',9],
            ['','',8,'',6,'',1,4,''],[5,'',1,'','','',2,9,''],[4,'',9,'',8,'','',7,''],
            ['',3,'','','','',5,'',7],[7,'','',2,'','','',3,6],[1,'','','','','',8,2,'']
        ]
        var hard=[
        [3,'','','','','','','',''],['',7,9,'',6,'','','',''],[5,'',6,'','',7,'',1,''],
            ['',5,8,'','',2,'','',''],['','',3,'','',8,'',6,2],['',9,'',6,'','','',3,''],
            ['','','','','',1,'',4,5],[8,1,'','',3,'','','',6],['',3,'','',2,'',8,'','']
        ]

        var easy=[
        [6,'','',8,2,7,5,'',9],[2,5,'','',4,'','',3,''],['',8,'','','',1,'',7,2],
            ['','',2,4,'','','','',7],['','',6,7,5,'','',8,''],[7,4,5,2,1,'','','',''],
            [5,6,1,'',7,'',9,2,8],[4,'','','','','','','',3],['','','',9,'',2,'',1,'']
        ]
        function mediumSet(){
            isEasy=false
            isMedium=true
            isHard=false
            var medium1=JSON.parse(window.localStorage.getItem('medium'))
            var tds=document.querySelectorAll('td')
            var trs=document.querySelectorAll('tr')
            console.log(tds)
            for(var i=0;i<81;i++)
            tds[i].style.background='none'
            for(var i=0;i<9;i++)
            trs[i].style.background='none'
        var k=1
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
            var id='cell-'+k
            // console.log(id)
            if(medium[i][j]!==''){
            document.getElementById(id).disabled=true
            document.getElementById(id).style.background='#e8e9e2'
        }
        
        else{
            document.getElementById(id).disabled=false
            document.getElementById(id).style.background='none'
        }
            document.getElementById(id).value=medium[i][j]
            if(medium1!==null)
            document.getElementById(id).value=medium1[i][j]
            k++
        }
        }
    }
        function easySet(){
            isHard=false
            isMedium=false
            isEasy=true
            var easy1=JSON.parse(window.localStorage.getItem('easy'))
            console.log(JSON.parse(window.localStorage.getItem('easy')))
            // if(window.localStorage.getItem('easy')!==null)
            // easy=easy1
            // for(var i=0;i<9;i++){
            //     for(var j=0;j<9;j++){
            //         easy[i][j]=easy1[i][j]
            //     }
            // }
            console.log(easy)
            var tds=document.querySelectorAll('td')
            var trs=document.querySelectorAll('tr')
            console.log(tds)
            for(var i=0;i<81;i++)
            tds[i].style.background='none'
            for(var i=0;i<9;i++)
            trs[i].style.background='none'
        var k=1
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
            var id='cell-'+k
            // console.log(id)
            if(easy[i][j]!==''){
            document.getElementById(id).disabled=true
            document.getElementById(id).style.background='#e8e9e2'
        }
        else{
            console.log(id)
            document.getElementById(id).disabled=false
            document.getElementById(id).style.background='none'
        }
            document.getElementById(id).value=easy[i][j]
            if(easy1!==null)
            document.getElementById(id).value=easy1[i][j]
        // console.log("HHHHHHHH")}
            k++
        }
        }
    }

        function hardSet(){
            isEasy=false
            isMedium=false
            isHard=true
            var hard1=JSON.parse(window.localStorage.getItem('hard'))
            var tds=document.querySelectorAll('td')
            var trs=document.querySelectorAll('tr')
            console.log(tds)
            for(var i=0;i<81;i++)
            tds[i].style.background='none'
            for(var i=0;i<9;i++)
            trs[i].style.background='none'
        var k=1
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
            var id='cell-'+k
            // console.log(id)
            if(hard[i][j]!==''){
            document.getElementById(id).disabled=true
            document.getElementById(id).style.background='#e8e9e2'
        }
        else{
            document.getElementById(id).disabled=false
            document.getElementById(id).style.background='none'
        }
            document.getElementById(id).value=hard[i][j]
            if(hard1!==null)
            document.getElementById(id).value=hard1[i][j]
            k++
        }
        }
    }

        function validateGame(){
            updateGrid()
            var rs=rowSum()
            var cs=colSum()
            var bs=boxSum()
            var rd=rowDuplicate()
            var cd=colDuplicate()
            var bd=boxDuplicate()
            console.log(grid)
            console.log(rs+''+cs+''+bs+''+rd+''+cd+''+bd)
            if(rs&&cs&&bs&&rd&&cd&&bd){
                if(isEasy)
                window.localStorage.removeItem('easy')
                if(isMedium)
                window.localStorage.removeItem('medium')
                if(isHard)
                window.localStorage.removeItem('hard')
            alert('YOU SOLVED IT!!')
            easySet()
        }
            else
            alert("OOPS WRONG!!\nDON'T WORRY TRY AGAIN")
        }
  
        function rowDuplicate(){
            var c=0
            for(var i=0;i<9;i++){
                var set=new Set(grid[i])
                if(set.size!==9)
                c++
            }
            if(c===0)
            return true
            else
            return false
        }

        function colDuplicate(){
            var c=0
            for(var i=0;i<9;i++){
                var set=new Set()
                for(var j=0;j<9;j++){
                    set.add(grid[j][i])
                }
                if(set.size!==9)
                c++
            }
            if(c===0)
            return true
            else
            return false
        }
        
        function boxDuplicate(){
            var startrow=0,startcol=0,c=0,d=0
            for(var i=0;i<9;i++){
                var set=new Set()
                c++
                for(var j=startrow;j<startrow+3;j++){
                    for(var k=startcol;k<startcol+3;k++){
                        set.add(grid[j][k])
                    }
                }
                startcol+=3
                if(c%3===0){
                startrow+=3
                startcol=0
            }
            if(set.size!==9)
            d++
            // console.log(startrow+' '+startcol)
            }
            if(d===0)
            return true
            else
            return false
            // console.log(boxsum)
        }
        

        function rowSum(){
            var rowssum=[]
            var s=0,c=0
            for(var i=0;i<9;i++){
                s=0
                for(var j=0;j<9;j++){
                s+=Number(grid[i][j])
                }
                // rowssum.push(s)
                if(s===45)
                c++
            }
            if(c===9)
            return true
            else
            return false
            // console.log(rowssum)
        }
        
        function colSum(){
            var colssum=[]
            var s=0,c=0
            for(var i=0;i<9;i++){
                s=0
                for(var j=0;j<9;j++){
                s+=Number(grid[j][i])
                }
                // colssum.push(s)
                if(s===45)
                c++
            }
            if(c===9)
            return true
            else
            return false
            // console.log(colssum)
        }
        
        function updateGrid(){
            grid=[]
            var k=1
            for(var i=0;i<9;i++){
                var arr=[]
                for(var j=0;j<9;j++){
                    id='cell-'+k
                    arr.push(document.getElementById(id).value)
                    k++
                }
                grid.push(arr)
            }
            if(isEasy){
                window.localStorage.setItem('easy',JSON.stringify(grid))
            }
            if(isMedium){
                window.localStorage.setItem('medium',JSON.stringify(grid))
            }
            if(isHard){
                window.localStorage.setItem('hard',JSON.stringify(grid))
            }
            console.log(window.localStorage)
            console.log('grid')
        }

        var temp,inputarr=[]
        function highlight(val,id){
            var l=inputarr.length
            if(temp===id){
            for(var i=0;i<l;i++){
                document.getElementById(inputarr[i]).style.background='none'
            }
        }
            else
            temp=id
            inputarr=[]
            var inputs=document.querySelectorAll('td>input')
            for(var i=0;i<81;i++){
                if(inputs[i].value===(val)){
                inputs[i].style.background='#8abdff'
                inputarr.push(inputs[i].id)
            }
            }
            console.log(inputarr)
            console.log(temp)
        }

        function checkDuplicate(key,iv){
            var cellno=iv.id.slice(5,iv.id.length+1)
            var row=Math.floor(cellno/9)+1
            var col=cellno%9
            if(col===0){
            row--
                col=9
            }
            for(var i=0;i<9;i++){
                if(grid[row-1][i]===key)
                return false
            }
            for(var i=0;i<9;i++){
                if(grid[i][col-1]===key)
                return false
            }
            console.log(col+' '+row)
            var startRow=(row-1)-(row-1)%3
            var startCol=(col-1)-(col-1)%3
            for(var i=startRow;i<startRow+3;i++){
                for(var j=startCol;j<startCol+3;j++)
                if(grid[i][j]===key)
                return false
            }
            return true
        }

        function boxSum(){
            var s,boxsum=[]
            var startrow=0,startcol=0,c=0,d=0
            for(var i=0;i<9;i++){
                s=0
                c++
                for(var j=startrow;j<startrow+3;j++){
                    for(var k=startcol;k<startcol+3;k++){
                        s+=Number(grid[j][k])
                    }
                }
                startcol+=3
                if(c%3===0){
                startrow+=3
                startcol=0
            }
            // console.log(startrow+' '+startcol)
            // boxsum.push(s)
            if(s===45)
            d++
            }
            if(d===9)
            return true
            else
            return false
            // console.log(boxsum)
        }
        function checknum(ev,v){
            updateGrid()
            console.log(v.id)
            var cd=checkDuplicate(ev.key,v)
            // var rd=rowCheck(ev.key,v)
            // var cd=colCheck(ev.key)
            // var bd=boxCheck(ev.key)
            // console.log(rd+''+cd+''+bd)
            // console.log(rd+''+cd+''+bd)
            if(ev.which>48 && ev.which<=57 && cd){
                console.log('h')
                v.value=ev.key
                highlight(ev.key,v.id)
                return true}
            else
            return false
        }
        
        function changeBg(iv){
            // console.log(iv.id.slice(5,iv.id.length+1))
            var cellno=iv.id.slice(5,iv.id.length+1)
            var row=Math.floor(cellno/9)+1
            var col=cellno%9
            if(col===0){
            row--
                col=9
            }
            var k=col
            var tds=document.querySelectorAll('td')
            // var trs=document.querySelectorAll('tr')

            for(var i=0;i<81;i++){
            // console.log(tds[i])
            tds[i].firstChild.style.background='none'
            if(tds[i].firstChild.disabled!==true){
            tds[i].style.background='none'
            
        }
            else
            tds[i].style.background='#e8e9e2'
        }
            
        //     for(var i=0;i<9;i++){
        //         console.log('trsss'+trs[i])
        //     if(trs[i].disabled!==true)
        //     trs[i].style.background='none'
        //     else
        //     trs[i].style.background='#e8e9e2'
        // }
            
            var inp=document.querySelectorAll('tr:nth-child('+row+')>td>input')
            for(var i=0;i<9;i++){
                document.getElementById('cell-'+k).style.background='#bbdefb'
                inp[i].style.background='#bbdefb'
                k+=9
            }
            var startRow=(row-1)-(row-1)%3+1
            var startCol=(col-1)-(col-1)%3+1
            var c=startCol+(startRow-1)*9
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    console.log(c)
                    document.getElementById('cell-'+c).style.background='#bbdefb'
                    c++
                }
                c+=6
            }
        }


        function reset(){
            if(isEasy){
                window.localStorage.removeItem('easy')
                easySet()
            }
                if(isMedium){
                window.localStorage.removeItem('medium')
                mediumSet()
            }
                if(isHard){
                window.localStorage.removeItem('hard')
                hardSet()
            }
        }