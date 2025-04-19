let Cough = document.querySelector('.Cough');
let Fever = document.querySelector('.Fever');
let Headaches = document.querySelector('.Headaches');
let pooping = document.querySelector('.pooping');
let Sore = document.querySelector('.Sore');
let Nausea = document.querySelector('.Nausea');
let Muscle = document.querySelector('.Muscle');
let Breathlessness = document.querySelector('.Breathlessness');
let Loss = document.querySelector('.Loss');
let chills = document.querySelector('.chills');
let Rash = document.querySelector('.Rash');
let Chest = document.querySelector('.Chest');
let diagnosis = document.querySelector('.diagnosis');

let names=[Cough,Fever,Headaches,pooping,Sore,Nausea,Muscle,Breathlessness,Loss,chills,Rash,Chest];

 
let selectedSymptom = '';
let resultbox1 = document.querySelector('.resultbox1');
let resultbox2 = document.querySelector('.resultbox2');
let resultbox3 = document.querySelector('.resultbox3');
let resultbox4 = document.querySelector('.resultbox4');

Cough.onclick = function(){
    selectedSymptom = 'Cough';
}
Fever.onclick = function(){
    selectedSymptom = 'Fever';
}
Headaches.onclick = function(){
    selectedSymptom = 'Headaches';
}
pooping.onclick = function(){
    selectedSymptom = 'pooping';
}
Sore.onclick = function(){
    selectedSymptom = 'Sore';
}
Nausea.onclick = function(){
    selectedSymptom = 'Nausea';
}
Breathlessness.onclick = function(){
    selectedSymptom = 'Breathlessness';
}
Loss.onclick = function(){
    selectedSymptom = 'Loss';
}
chills.onclick = function(){
    selectedSymptom = 'chills';
}
Rash.onclick = function(){
    selectedSymptom = 'Rash';
}
Chest.onclick = function(){
    selectedSymptom = 'Chest';
}
Muscle.onclick = function(){
    selectedSymptom = 'Muscle';
}


diagnosis.onclick = function(){
    if(selectedSymptom==='Fever'){
        resultbox1.innerHTML='الأمراض المحتملة: COVID-19، الأنفلونزا، الملاريا(يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>ارتداء الكمامة في الأماكن العامة.</li>
        <li> تجنب لدغات البعوض (للملاريا).</li>
        <li>ممارسة النظافة الجيدة وغسل اليدين بانتظام.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على العلاج المناسب.</li>
        <li> تناول الأدوية المخفضة للحرارة مثل الباراسيتامول.</li>
        <li>الراحة وشرب السوائل بكثرة.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>باراسيتامول</li>
        <li> إيبوبروفين</li>
        <li>أدوية مضادة للفيروسات إذا كانت موصوفة</li>
        </ul>
        `
    }else if (selectedSymptom==='Cough'){
        resultbox1.innerHTML='(الأمراض المحتملة: التهاب الحلق، الربو، الالتهاب الرئوي (يرجى استشارة الطبيب في أقرب وقت للتأكد'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب التدخين واستنشاق الدخان.</li>
        <li>الحفاظ على ترطيب الحلق بشرب السوائل.</li>
        <li>استخدام مرطب الهواء.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للتشخيص والعلاج المناسب.</li>
        <li> استخدام شراب السعال المهدئ.</li>
        <li>الراحة والتدفئة.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>شراب السعال</li>
        <li> موسعات الشعب الهوائية (للربو)</li>
        <li>مضادات حيوية (إذا كانت موصوفة)</li>
        </ul>
        `
    }else if(selectedSymptom==='Headaches'){
        resultbox1.innerHTML='الأمراض المحتملة: الصداع النصفي، صداع التوتر، الجيوب الأنفية (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تقليل التوتر والإجهاد.</li>
        <li>الحفاظ على وضعية جيدة للجسم.</li>
        <li>شرب الماء بكثرة لتجنب الجفاف.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص الصحيح.</li>
        <li>تطبيق الكمادات الباردة على الجبين.</li>
        <li>استخدام الأدوية المسكنة للألم.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>باراسيتامول</li>
        <li> إيبوبروفين</li>
        <li>تريبتانات (للصداع النصفي)</li>
        </ul>
        `
    }else if(selectedSymptom==='pooping'){
        resultbox1.innerHTML='الأمراض المحتملة: فقر الدم، متلازمة التعب المزمن، قصور الغدة الدرقية (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>اتباع نظام غذائي متوازن غني بالحديد والفيتامينات.</li>
        <li>ممارسة التمارين الرياضية بانتظام لزيادة مستويات الطاقة.</li>
        <li>إدارة التوتر بفعالية.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص والعلاج المناسب.</li>
        <li>تناول مكملات الحديد إذا كنت مصابًا بفقر الدم.</li>
        <li>العلاج بالهرمونات الدرقية إذا كان ذلك ضروريًا.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>مكملات الحديد</li>
        <li> علاج هرمونات الغدة الدرقية</li>
        <li>حقن فيتامين B12</li>
        </ul>
        `
    }else if(selectedSymptom==='Sore'){
        resultbox1.innerHTML='الأمراض المحتملة: التهاب الحلق البكتيري، التهاب الحلق الفيروسي، التهاب اللوزتين (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب الاتصال مع الأشخاص المصابين.</li>
        <li>غسل اليدين بانتظام.</li>
        <li>استخدام المنديل عند السعال أو العطس.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص والعلاج المناسب.</li>
        <li>تناول المشروبات الدافئة.</li>
        <li>استخدام غرغرة بالماء والملح.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية مضادة للبكتيريا (إذا كانت العدوى بكتيرية)</li>
        <li> أدوية مسكنة للألم</li>
        <li>أدوية مضادة للفيروسات (إذا كانت العدوى فيروسية)</li>
        </ul>
        `
    }else if(selectedSymptom==='Nausea'){
        resultbox1.innerHTML='الأمراض المحتملة: التهاب المعدة، الارتجاع الحمضي، التسمم الغذائي (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب تناول الأطعمة الملوثة.</li>
        <li>شرب الماء النظيف وتجنب المياه الملوثة.</li>
        <liتناول وجبات صغيرة ومنتظمة.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص الصحيح.</li>
        <li>تناول أدوية مضادة للغثيان إذا لزم الأمر.</li>
        <li>الراحة وتجنب الأطعمة الثقيلة.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية مضادة للغثيان</li>
        <li> مضادات الحموضة (للارتجاع الحمضي)</li>
        </ul>
        `
    }else if(selectedSymptom==='Breathlessness'){
        resultbox1.innerHTML='الأمراض المحتملة: الربو، الالتهاب الرئوي، قصور القلب (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب المحفزات التي تؤدي إلى ضيق التنفس.</li>
        <li>ممارسة الرياضة بانتظام لتحسين قدرة الرئتين.</li>
        <li>الابتعاد عن التدخين والأدخنة الضارة.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص الصحيح.</li>
        <li>استخدام الأدوية الموصوفة من قبل الطبيب.</li>
        <li>الراحة والتنفس العميق.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية موسعة للشعب الهوائية</li>
        <li> أدوية استنشاق (للربو)</li>
        <li>أدوية مدرة للبول (لقصور القلب)</li>
        </ul>
        `
    }else if(selectedSymptom==='Loss'){
        resultbox1.innerHTML='الأمراض المحتملة: COVID-19، التهاب الجيوب الأنفية، التهاب اللوزتين (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>اتباع قواعد النظافة الشخصية.</li>
        <li>ارتداء الكمامة وتجنب الأماكن المزدحمة.</li>
        <li>استشارة الطبيب عند ظهور الأعراض.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص والعلاج المناسب.</li>
        <li>استخدام أدوية مخصصة للأعراض.</li>
        <li>الراحة والتغذية السليمة.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية مضادة للفيروسات (إذا كانت الحالة COVID-19)</li>
        <li> أدوية علاج التهاب الجيوب الأنفية</li>
        </ul>
        `
    }else if(selectedSymptom==='chills'){
        resultbox1.innerHTML='الأمراض المحتملة: الملاريا، الأنفلونزا، التهاب الحلق (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب لدغات البعوض باستخدام طارد الحشرات.</li>
        <li>ارتداء ملابس دافئة في الطقس البارد.</li>
        <li>الحفاظ على نظافة الجسم والملابس.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على العلاج المناسب.</li>
        <li>تناول أدوية مضادة للفيروسات أو مضادات الملاريا إذا لزم الأمر.</li>
        <li>الراحة وشرب السوائل.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية مضادة للملاريا</li>
        <li> أدوية مضادة للفيروسات</li>
        </ul>
        `
    }else if(selectedSymptom==='Rash'){
        resultbox1.innerHTML='الأمراض المحتملة: الحساسية، التهاب الجلد، جدري الماء (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>تجنب المواد المسببة للحساسية.</li>
        <li>ارتداء ملابس مناسبة لحماية الجلد.</li>
        <li>ممارسة النظافة الشخصية الجيدة.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص والعلاج المناسب.</li>
        <li>استخدام الكريمات الموضعية الموصوفة.</li>
        <li>تجنب الحكّة والاحتكاك بالجلد المتأثر.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>كريمات مضادة للحساسية</li>
        <li> أدوية مضادة للفيروسات (إذا كانت العدوى فيروسية)</li>
        </ul>
        `
    }else if(selectedSymptom==='Chest'){
        resultbox1.innerHTML='الأمراض المحتملة: النوبة القلبية، التهاب الرئة، عسر الهضم (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>اتباع نظام غذائي صحي.</li>
        <li>ممارسة التمارين الرياضية بانتظام.</li>
        <li>تجنب التدخين والكحول.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب بشكل عاجل.</li>
        <li>تناول الأدوية الموصوفة.</li>
        <li>الرعاية الطبية الطارئة إذا لزم الأمر.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>أدوية علاج النوبات القلبية (مثل الأسبرين)</li>
        <li> أدوية مضادة للحموضة (لعسر الهضم)</li>
        </ul>
        `
    }else if(selectedSymptom==='Muscle'){
        resultbox1.innerHTML='الأمراض المحتملة: التهاب العضلات، الإنفلونزا، الألم العضلي الليفي (يرجى استشارة الطبيب في أقرب وقت للتأكد)'
        resultbox2.innerHTML=`
        <h3>:الوقايه</h3>
        <ul>
        <li>ممارسة التمارين الرياضية بانتظام.</li>
        <li>تجنب النشاط البدني المفرط.</li>
        <li>الحفاظ على الترطيب المناسب للجسم.</li>
        </ul>
        `
        resultbox3.innerHTML=`
        <h3>:العلاج</h3>
        <ul>
        <li>استشارة الطبيب للحصول على التشخيص والعلاج المناسب.</li>
        <li>استخدام المسكنات عند الحاجة.</li>
        <li>تطبيق الكمادات الساخنة على العضلات المؤلمة.</li>
        </ul>
        `
        resultbox4.innerHTML=`
        <h3>:الأدوية</h3>
        <ul>
        <li>مسكنات للألم مثل الباراسيتامول أو الإيبوبروفين</li>
        <li> أدوية مضادة للالتهابات</li>
        </ul>
        `
    }
}










