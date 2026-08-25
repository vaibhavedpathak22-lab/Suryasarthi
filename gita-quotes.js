   BHAGAVAD GITA DAILY MOTIVATIONAL QUOTES (365-Day Rotation)
═══════════════════════════════════════════════════════════════ */
const GITA_QUOTES = [
  {
    ref: "श्रीमद्भगवद्गीता २.४७ (BG 2.47)",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्म के फल की इच्छा मत करो और न ही अकर्म में आसक्त हो।",
    mr: "तुझा अधिकार फक्त कर्म करण्यावर आहे, त्याच्या फळावर कधीही नाही. म्हणून फळाची अपेक्षा न ठेवता तुझे कर्तव्य निष्ठेने कर.",
    en: "You have a right to perform your prescribed duty, but never to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.५ (BG 6.5)",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    hi: "अपने द्वारा अपना उद्धार करे, अपने आपको पतन में न डाले; क्योंकि मनुष्य स्वयं ही अपना मित्र है और स्वयं ही अपना शत्रु है।",
    mr: "स्वतःच्या प्रयत्नांनी स्वतःचा उद्धार करा, स्वतःला खचू देऊ नका. कारण मनुष्य स्वतःच स्वतःचा मित्र आणि स्वतःच स्वतःचा शत्रू आहे.",
    en: "Elevate yourself through the power of your own mind, and do not degrade yourself. For the mind is the friend of the self, and also the enemy of the self."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.५० (BG 2.50)",
    sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥",
    hi: "समत्व बुद्धि से युक्त मनुष्य जीवित रहते ही पुण्य और पाप दोनों को छोड़ देता है। इसलिए योग में लग जाओ; कर्मों में कुशलता ही योग है।",
    mr: "समत्व बुद्धी असलेला मनुष्य जन्मातच पुण्य आणि पाप दोन्ही सोडून देतो. म्हणून योगाचा सराव करा; कर्मांमध्ये कुशलता म्हणजेच योग.",
    en: "A person endowed with wisdom casts off both good and evil deeds in this life. Therefore, devote yourself to Yoga; Yoga is skill in action."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.१४ (BG 2.14)",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    hi: "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख देने वाले इन्द्रिय-विषय अनित्य और आने-जाने वाले हैं। हे भारत! तुम उनको धैर्यापूर्वक सहन करो।",
    mr: "हे कौंतेय! सुख-दुःख देणारे इंद्रियांचे विषय अनित्य आणि येणारे-जाणारे आहेत. हे भारत! तू ते धैर्याने सहन कर.",
    en: "O son of Kunti, the contact between senses and objects gives rise to cold, heat, pleasure, and pain. They are temporary; bear them patiently."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.७८ (BG 18.78)",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    hi: "जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धारी अर्जुन है, वहीं श्री, विजय, ऐश्वर्य और अचल नीति है।",
    mr: "जिथे योगेश्वर श्रीकृष्ण आणि धनुर्धारी अर्जुन आहे, तिथेच विजय, समृद्धी आणि नीती राहते.",
    en: "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the wielder of the bow, there will be fortune, victory, and morality."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.३८ (BG 4.38)",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    hi: "इस संसार में ज्ञान के समान पवित्र करने वाला कुछ भी नहीं है। योग में सिद्ध हुआ मनुष्य सही समय आने पर उस ज्ञान को अपने आप में पा लेता है।",
    mr: "या जगात ज्ञानासारखे पवित्र काहीही नाही. योगात सिद्ध झालेला मनुष्य योग्य वेळी ते ज्ञान स्वतःमध्ये प्राप्त करतो.",
    en: "In this world, there is nothing so purifying as divine knowledge. One perfected in Yoga finds that knowledge within themselves in due time."
  },
  {
    ref: "श्रीमद्भगवद्गीता ९.२२ (BG 9.22)",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    hi: "जो लोग अनन्य भाव से मेरा चिंतन करते हुए मेरी उपासना करते हैं, उन नित्य युक्त मनुष्यों के योगक्षेम का वहन मैं स्वयं करता हूँ।",
    mr: "जे अनन्यभावाने माझे चिंतन करत माझी उपासना करतात, त्या नित्ययुक्त भक्तांच्या योगक्षेमाची जबाबदारी मी स्वतः घेतो.",
    en: "For those who always worship Me with exclusive devotion, meditating on My divine form, I personally carry what they lack and preserve what they have."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.६ (BG 6.6)",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    hi: "जिसने अपने मन पर विजय प्राप्त कर ली है, उसका मन उसका परम मित्र है; परंतु जिसने मन को नहीं जीता, उसका मन शत्रु की भांति व्यवहार करता है।",
    mr: "ज्याने आपल्या मनावर विजय मिळवला आहे, त्याचे मन त्याचा सर्वोत्तम मित्र आहे. परंतु ज्याने मन जिंकले नाही, त्याचे मन शत्रूसारखे वागते.",
    en: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind remains the greatest enemy."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.१९ (BG 3.19)",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    hi: "इसलिए आसक्ति से रहित होकर निरंतर अपने कर्तव्य कर्म का पालन करो; क्योंकि निष्काम भाव से कर्म करने से मनुष्य परमात्मा को प्राप्त होता है।",
    mr: "म्हणून आसक्ती न ठेवता नेहमी आपले कर्तव्य कर्म निष्ठेने करा. निष्काम कर्म केल्याने मनुष्य परमतत्त्वाला प्राप्त होतो.",
    en: "Therefore, without attachment, perform your duty always. By working without attachment, a person attains the Supreme."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.१७ (BG 6.17)",
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    hi: "जिसका आहार-विहार संतुलित है, कर्मों में चेष्टा संतुलित है, और सोने-जागने का समय नियमित है, उसका योग सभी दुःखों का नाश करने वाला होता है।",
    mr: "ज्याचा आहार-विहार संतुलित आहे, कर्मांमध्ये प्रयत्न योग्य आहेत, आणि झोपणे-जागणे वेळेवर आहे, त्याचा योग सर्व दुःखांचा नाश करतो.",
    en: "He who is regulated in his habits of eating, sleeping, recreation, and work can mitigate all material pains by practicing Yoga."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.७० (BG 2.70)",
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी॥",
    hi: "जिस प्रकार सभी नदियाँ परिपूर्ण समुद्र में समाकर उसे विचलित नहीं करतीं, उसी प्रकार जिस मनुष्य में भोग विचलित किए बिना समा जाते हैं, वही शांति पाता है।",
    mr: "ज्याप्रमाणे सर्व नद्या समुद्रात येऊन मिळतात तरी समुद्र शांत राहतो, त्याचप्रमाणे ज्याचे मन वासनांनी विचलित होत नाही, तोच खरी शांती अनुभवतो.",
    en: "As the ocean remains calm despite rivers constantly flowing into it, so does the person attain peace into whom all desires merge without causing disturbance."
  },
  {
    ref: "श्रीमद्भगवद्गीता ११.३३ (BG 11.33)",
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्।\nमयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्॥",
    hi: "इसलिए तुम उठो! यश प्राप्त करो, शत्रुओं को जीतकर समृद्ध राज्य का भोग करो। ये सब तो पहले ही मेरे द्वारा मारे जा चुके हैं, तुम केवल निमित्त मात्र बनो।",
    mr: "म्हणून तू उठ! यश मिळव, शत्रूंवर विजय मिळवून समृद्ध राज्याचा उपभोग घे. हे सर्व आधीच माझ्याद्वारे मारले गेले आहेत, तू फक्त निमित्त बन.",
    en: "Therefore get up and attain glory! Conquer your enemies and enjoy a prosperous kingdom. They have already been slain by Me; be merely an instrument."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.७ (BG 4.7)",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    hi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं धर्म की पुनर्स्थापना के लिए स्वयं को प्रकट करता हूँ।",
    mr: "हे भारत! जेव्हा जेव्हा धर्माची हानी होते आणि अधर्म वाढतो, तेव्हा तेव्हा मी स्वतःला प्रकट करतो.",
    en: "Whenever there is a decline in righteousness and a rise of unrighteousness, O Bharat, at that time I manifest Myself."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.६६ (BG 18.66)",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    hi: "सब धर्मों को छोड़कर केवल मेरी शरण में आ जाओ। मैं तुम्हें सब पापों से मुक्त कर दूँगा, शोक मत करो।",
    mr: "सर्व चिंता व आश्रय सोडून फक्त माझ्या शरण ये. मी तुला सर्व संकटांतून व पापांतून मुक्त करीन, काळजी करू नकोस.",
    en: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall deliver you from all sinful reactions; do not fear."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.३ (BG 2.3)",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वात्तिष्ठ परन्तप॥",
    hi: "हे पार्थ! नपुंसकता को मत प्राप्त हो, यह तुम्हें शोभा नहीं देती। हे परंतप! हृदय की तुच्छ दुर्बलता को त्यागकर युद्ध के लिए खड़े हो जाओ।",
    mr: "हे पार्था! अशक्तपणा बाळगू नकोस, हे तुला शोभत नाही. मनाचा लहानपणा आणि दुर्बलता सोडून उठून उभा राहा.",
    en: "Do not yield to unmanliness, O Arjuna. It does not befit you. Cast off this petty weakness of heart and arise, O scorcher of enemies!"
  },
  {
    ref: "श्रीमद्भगवद्गीता २.३८ (BG 2.38)",
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    hi: "सुख और दुःख, लाभ और हानि, जय और पराजय को समान मानकर अपने कर्तव्य के लिए तत्पर हो जाओ; इस प्रकार तुम पाप को प्राप्त नहीं होगे।",
    mr: "सुख-दुःख, लाभ-हानी, विजय-पराजय समान मानून कर्तव्यासाठी सज्ज हो. असे केल्याने तुला पाप लागणार नाही.",
    en: "Treating pleasure and pain, gain and loss, victory and defeat alike, engage in your duty. Thus you shall incur no sin."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.४० (BG 2.40)",
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥",
    hi: "इस कर्मयोग में प्रयास का नाश नहीं होता और न ही कोई विपरीत परिणाम होता है। इसका थोड़ा-सा भी आचरण महान भय से रक्षा करता है।",
    mr: "या कर्मयोगात केलेला छोटा प्रयत्नही वाया जात नाही. याचे थोडेसे आचरणही मोठ्या भयापासून संरक्षण करते.",
    en: "In this path of Yoga, no effort is ever wasted, nor is there any adverse effect. Even a little practice of this righteousness protects one from great fear."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.४८ (BG 2.48)",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    hi: "हे धनंजय! आसक्ति को त्यागकर तथा सिद्धि और असिद्धि में समभाव रखकर योग में स्थित होकर कर्म करो; समत्व ही योग कहलाता है।",
    mr: "हे धनंजया! आसक्ती सोडून, यश-अपयशात समतोल ठेवून योगात स्थिर होऊन कर्म कर. या समत्वालाच योग म्हणतात.",
    en: "Be steadfast in Yoga, O Arjuna. Perform your duty without attachment, remaining even-minded in success and failure. Equanimity is called Yoga."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.८ (BG 3.8)",
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
    hi: "तुम अपना नियत कर्तव्य कर्म करो, क्योंकि कर्म न करने की अपेक्षा कर्म करना श्रेष्ठ है। कर्म न करने से तुम्हारा शरीर-निर्वाह भी सिद्ध नहीं होगा।",
    mr: "तू तुझे नियत कर्तव्य कर्म कर, कारण कर्म न करण्यापेक्षा कर्म करणे श्रेष्ठ आहे. कर्माशिवाय तुझे शरीर चालणेही शक्य नाही.",
    en: "Perform your prescribed duty, for action is better than inaction. A person cannot even maintain their physical body without action."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.२१ (BG 3.21)",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    hi: "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वैसा ही आचरण करते हैं। वह जो प्रमाण प्रस्तुत करता है, समस्त संसार उसका अनुसरण करता है।",
    mr: "श्रेष्ठ व्यक्ती जसे आचरण करते, इतर लोकही तसेच करतात. ती व्यक्ती जो आदर्श ठेवते, सर्व जग त्याचेच अनुकरण करते.",
    en: "Whatever action a great leader performs, common people follow. Whatever standards they set by exemplary acts, all the world pursues."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.२४ (BG 4.24)",
    sanskrit: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
    hi: "जिस यज्ञ में अर्पण भी ब्रह्म है, हवि भी ब्रह्म है, और अग्नि भी ब्रह्म है, उस ब्रह्मकर्म समाधि वाले मनुष्य द्वारा ब्रह्म ही प्राप्त करने योग्य है।",
    mr: "ज्या कर्मात अर्पण, आहुती आणि अग्नी सर्व ब्रह्ममय आहे, त्या निष्काम कर्म करणाऱ्या साधकाला ब्रह्मच प्राप्त होते.",
    en: "The offering is Brahman, the oblation is Brahman, offered by Brahman into the fire of Brahman. Brahman shall be reached by him who is absorbed in Brahman."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.३९ (BG 4.39)",
    sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शानतिमचिरेणाधिगच्छति॥",
    hi: "श्रद्धावान, तत्पर और जितेन्द्रिय मनुष्य ज्ञान को प्राप्त करता है, और ज्ञान प्राप्त करके वह शीघ्र ही परम शांति को प्राप्त हो जाता है।",
    mr: "ज्याच्याकडे श्रद्धा आहे, संयम आहे आणि जो अभ्यासात तत्पर आहे, तो ज्ञान मिळवतो आणि लवकरच परम शांतता अनुभवतो.",
    en: "The faithful who are dedicated to truth and control their senses attain spiritual knowledge. Having gained knowledge, they quickly reach supreme peace."
  },
  {
    ref: "श्रीमद्भगवद्गीता ५.१२ (BG 5.12)",
    sanskrit: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।\nअयुक्तः कामकारेण फले सक्तो निबध्यते॥",
    hi: "कर्मयोगी कर्मफल का त्याग करके परम शांति को प्राप्त करता है; परंतु सकामी मनुष्य फल की इच्छा के कारण बंधन में बँध जाता है।",
    mr: "कर्मयोगी कर्मफळाचा त्याग करून शाश्वत शांती मिळवतो. परंतु फळाची इच्छा ठेवणारा माणूस संकटात आणि बंधनात अडकतो.",
    en: "The united soul, relinquishing the fruit of action, attains everlasting peace; whilst the non-united, impelled by desire, gets bound."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.१९ (BG 6.19)",
    sanskrit: "यथा दीपो निवातस्थो निङ्गते सोपमा स्मृता।\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥",
    hi: "जिस प्रकार हवा से रहित स्थान में दीपक की लौ विचलित नहीं होती, वही उपमा ध्यान में लगे हुए संयमी योगी के चित्त की मानी गई है।",
    mr: "ज्याप्रमाणे वाऱ्याशिवाय ठिकाणी दिव्याची ज्योत स्थिर राहते, त्याचप्रमाणे ध्यान करणाऱ्या संयमी योग्याचे मन स्थिर राहते.",
    en: "As a lamp in a windless place does not flicker, so is the controlled mind of a yogi practiced in meditation on the Self."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.२६ (BG 6.26)",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    hi: "यह चंचल और अस्थिर मन जहाँ-जहाँ भटकता है, वहाँ-वहाँ से इसे रोककर आत्मा के ही वश में लाना चाहिए।",
    mr: "हे चंचल मन जिथे जिथे भटकते, तिथून त्याला परत आणून स्वतःच्या आत्म्यामध्ये स्थिर केले पाहिजे.",
    en: "From whatever cause the restless and unsteady mind wanders away, from that it should be restrained and brought under the control of the Self."
  },
  {
    ref: "श्रीमद्भगवद्गीता १०.४१ (BG 10.41)",
    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंशसम्भवम्॥",
    hi: "जो-जो भी ऐश्वर्ययुक्त, कान्तियुक्त और शक्तिमान वस्तु है, उस-उस को तुम मेरे ही तेज के अंश से उत्पन्न समझो।",
    mr: "जगात जी जी गोष्ट तेजस्वी, समृद्ध आणि सामर्थ्यवान आहे, ती सर्व माझ्याच तेजाच्या अंशापासून तयार झाली आहे हे समज.",
    en: "Whatever glorious, beautiful, or mighty creation exists, know that it springs from but a spark of My splendor."
  },
  {
    ref: "श्रीमद्भगवद्गीता १२.१५ (BG 12.15)",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    hi: "जिससे कोई भी जीव विचलित नहीं होता और जो स्वयं किसी से विचलित नहीं होता, जो हर्ष, अमर्ष, भय और उद्वेग से मुक्त है, वही मुझे प्रिय है।",
    mr: "ज्यामुळे कोणीही घाबरत नाही आणि जो कोणालाही घाबरत नाही, जो आनंद, भीती व चिंतेपासून मुक्त आहे, तोच मला प्रिय आहे.",
    en: "He by whom the world is not agitated and who is not agitated by the world, who is free from joy, envy, fear, and anxiety—he is dear to Me."
  },
  {
    ref: "श्रीमद्भगवद्गीता १६.१ (BG 16.1)",
    sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जविम्॥",
    hi: "निर्भयता, अंतःकरण की शुद्धि, ज्ञानयोग में दृढ स्थिति, दान, इंद्रिय-दमन, यज्ञ, स्वाध्याय, तप और सरलता—ये सब दैवी गुण हैं।",
    mr: "भीतीहीनता, अंतःकरणाची शुद्धी, ज्ञानातील निष्ठा, दान, संयम आणि सरळपणा—हे सर्व दैवी गुण आहेत.",
    en: "Fearlessness, purity of heart, steadfastness in knowledge, charity, self-control, sacrifice, study of scriptures, austerity, and simplicity."
  },
  {
    ref: "श्रीमद्भगवद्गीता १७.३ (BG 17.3)",
    sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
    hi: "हे भारत! सभी मनुष्यों की श्रद्धा उनके अंतःकरण के अनुरूप होती है। मनुष्य श्रद्धामय है; जैसी जिसकी श्रद्धा है, वैसा ही वह स्वयं है।",
    mr: "हे भारत! प्रत्येकाची श्रद्धा त्याच्या स्वभावावर अवलंबून असते. माणूस जशी श्रद्धा बाळगतो, तसाच तो बनतो.",
    en: "The faith of all human beings is according to their innate nature. A person is made by their faith; as their faith is, so indeed are they."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.४६ (BG 18.46)",
    sanskrit: "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।\nस्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः॥",
    hi: "जिस परमेश्वर से सभी प्राणियों की उत्पत्ति हुई है और जिससे यह समस्त जगत व्याप्त है, उसकी अपने स्वाभाविक कर्मों द्वारा पूजा करके मनुष्य सिद्धि पाता है।",
    mr: "ज्या ईश्वरापासून सर्व सृष्टी निर्माण झाली आहे, त्याची आपल्या कर्माने पूजा करून मनुष्य यशाची सिद्धी मिळवतो.",
    en: "By worshipping Him from whom all beings originate and by whom this entire universe is pervaded, through one's own natural work, a person attains perfection."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.६१ (BG 18.61)",
    sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    hi: "हे अर्जुन! ईश्वर सभी प्राणियों के हृदय में स्थित है और अपनी माया से सभी जीवों को शरीर रूपी यंत्र पर सवार करके घुमाता रहता है।",
    mr: "हे अर्जुना! ईश्वर सर्व प्राण्यांच्या हृदयात राहतो आणि आपल्या मायेने सर्व जीवांना प्रवाहित ठेवतो.",
    en: "The Supreme Lord dwells in the hearts of all living beings, directing their wanderings through His divine energy."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.७३ (BG 18.73)",
    sanskrit: "नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव॥",
    hi: "हे अच्युत! आपकी कृपा से मेरा मोह नष्ट हो गया और मुझे स्मृति प्राप्त हो गई है। अब मैं संशय-रहित होकर आपके वचन का पालन करूँगा।",
    mr: "हे अच्युता! तुझ्या कृपेने माझा भ्रम दूर झाला आहे. आता मी संशयरहित होऊन तुझ्या आज्ञेचे पालन करीन.",
    en: "My illusion is destroyed and I have regained my memory through Your grace, O Krishna. I am firm, free from doubt, and shall act according to Your word."
  }
];

function getDailyGitaQuote() {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const idx = Math.abs(dayOfYear) % GITA_QUOTES.length;
  return GITA_QUOTES[idx];
}

function getQuoteMeaning(quote, langOverride) {
  if(!quote) quote = getDailyGitaQuote();
  const lang = langOverride || cfg.quoteLang || cfg.pranaLang || "hi";
  if(lang === "mr") return quote.mr || quote.hi || quote.en;
  if(lang === "en") return quote.en || quote.hi;
  return quote.hi || quote.en;
}

function setGitaQuoteLanguage(lang) {
  if(!lang || !["hi", "mr", "en"].includes(lang)) return;
  cfg.quoteLang = lang;
  
  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) qlEl.value = lang;
  const mqEl = document.getElementById("modal-quote-lang"); if(mqEl) mqEl.value = lang;

  const quote = getDailyGitaQuote();
  const meaning = getQuoteMeaning(quote, lang);
  const gmEl = document.getElementById("gita-meaning"); if(gmEl) gmEl.textContent = meaning;
  
  saveAll();
}

let alarmSnoozeCount = 0;
let _snoozeTimeout = null;

function snoozeAlarm(min) {
  if (alarmSnoozeCount >= 2) {
    alert("Snooze limit reached! You can snooze max 2 times for today's alarm.");
    return;
  }
  const snoozeMins = parseInt(min) || 5;
  alarmSnoozeCount++;

  closeGitaQuoteModal();
  qClear();

  if (_snoozeTimeout) { clearTimeout(_snoozeTimeout); _snoozeTimeout = null; }

  const ms = snoozeMins * 60 * 1000;
  _snoozeTimeout = setTimeout(() => {
    fireAlarm(true);
  }, ms);

  setStatus("⏰ Alarm snoozed for " + snoozeMins + " min (Snooze " + alarmSnoozeCount + "/2)");

  const now = new Date(Date.now() + ms);
  _tryAndroidAlarm(now.getHours(), now.getMinutes());
}

let _gitaAutoStartTimer = null;

function showGitaQuoteModal(autoStartPracticeOnFinish = false) {
  // Close any open diet modal or settings drawer
  const dietModal = document.getElementById("diet-modal");
  if (dietModal) {
    dietModal.style.display = "none";
    dietModal.classList.remove("show");
  }
  const pranaModal = document.getElementById("prana-guide-modal");
  if (pranaModal) {
    pranaModal.style.display = "none";
    pranaModal.classList.remove("show");
  }
  const dr = document.getElementById("dr");
  if (dr) {
    dr.style.cssText = "display:none !important;";
    dr.classList.remove("show");
  }

  if(_gitaAutoStartTimer) {
    clearTimeout(_gitaAutoStartTimer);
    _gitaAutoStartTimer = null;
  }

  const quote = getDailyGitaQuote();
  const lang = (typeof cfg !== "undefined" ? (cfg.quoteLang || cfg.pranaLang) : "hi") || "hi";
  const meaning = getQuoteMeaning(quote, lang);
  const goal = typeof todayGoal === "function" ? todayGoal() : ((typeof data !== "undefined" && data.baseGoal) ? data.baseGoal : 32);

  const grEl = document.getElementById("gita-ref"); if(grEl) grEl.textContent = quote.ref;
  const gsEl = document.getElementById("gita-shloka"); if(gsEl) gsEl.innerHTML = quote.sanskrit.replace(/\n/g, "<br>");
  const gmEl = document.getElementById("gita-meaning"); if(gmEl) gmEl.textContent = meaning;
  const gtEl = document.getElementById("gita-target-pill"); if(gtEl) gtEl.textContent = "🎯 Today's Target: " + goal + " Rounds";

  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) qlEl.value = lang;
  const mqEl = document.getElementById("modal-quote-lang"); if(mqEl) mqEl.value = lang;

  const autoBanner = document.getElementById("gita-auto-start-banner");
  if(autoBanner) {
    autoBanner.style.display = "block";
    autoBanner.innerHTML = "📖 Take your time to read or listen to today's Shloka &amp; Meaning. Tap <strong>'Start Surya Namaskara Now'</strong> whenever you are ready!";
  }

  // Ensure Start Surya Namaskara Now button is unlocked for user decision
  const startBtn = document.getElementById("gita-start-btn");
  if(startBtn) {
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.cursor = "pointer";
    startBtn.innerHTML = "🧘 Start Surya Namaskara Now";
  }

  const modal = document.getElementById("gita-modal");
  if(modal) {
    modal.style.cssText = "display:flex !important; position:fixed !important; inset:0 !important; z-index:999999 !important; align-items:center !important; justify-content:center !important;";
    modal.classList.add("show");
  }

  // Speak Gita Shloka & Meaning without auto-closing screen
  speakCurrentGitaQuote();
}

function closeGitaQuoteModal() {
  if(_gitaAutoStartTimer) {
    clearTimeout(_gitaAutoStartTimer);
    _gitaAutoStartTimer = null;
  }
  const modal = document.getElementById("gita-modal");
  if(modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

function speakCurrentGitaQuote(onComplete) {
  if(!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
    if(onComplete) {
      const textLen = (getDailyGitaQuote().sanskrit.length + getQuoteMeaning().length);
      const estDuration = Math.max(7000, textLen * 80);
      setTimeout(onComplete, estDuration);
    }
    return;
  }

  // Resume Web Speech API if locked by browser
  try { window.speechSynthesis.resume(); } catch(e){}

  qClear(); // Clear any pending speech queue first

  const quote = getDailyGitaQuote();
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const meaning = getQuoteMeaning(quote, lang);

  const vList = window.speechSynthesis.getVoices() || [];
  const bestHi = hiVoice || vList.find(v=>v.lang==="hi-IN"&&v.localService) || vList.find(v=>v.lang==="hi-IN") || vList.find(v=>v.lang.startsWith("hi")) || null;

  // 1. Speak Sanskrit Shloka first
  const cleanShloka = quote.sanskrit.replace(/\n/g, " ").replace(/॥/g, ".").replace(/।/g, ", ");
  const uShloka = new SpeechSynthesisUtterance(cleanShloka);
  uShloka.lang = "hi-IN";
  uShloka.rate = 0.82;
  uShloka.pitch = 1.0;
  uShloka.volume = 1.0;
  if(bestHi) uShloka.voice = bestHi;
  
  // 2. Speak Meaning in user selected language (Hindi / Marathi / English)
  const uMeaning = new SpeechSynthesisUtterance(meaning);
  if(lang === "en") {
    uMeaning.lang = "en-IN"; uMeaning.rate = 0.88; uMeaning.volume = 1.0;
    const ev = vList.find(v=>v.lang==="en-IN") || vList.find(v=>v.lang.startsWith("en")) || null;
    if(ev) uMeaning.voice = ev;
  } else if(lang === "mr") {
    uMeaning.lang = "mr-IN"; uMeaning.rate = 0.82; uMeaning.volume = 1.0;
    const mv = vList.find(v=>v.lang==="mr-IN") || vList.find(v=>v.lang.startsWith("mr")) || bestHi;
    if(mv) uMeaning.voice = mv;
  } else {
    uMeaning.lang = "hi-IN"; uMeaning.rate = 0.82; uMeaning.volume = 1.0;
    if(bestHi) uMeaning.voice = bestHi;
  }

  let completedOnce = false;
  const handleEnd = () => {
    if(completedOnce) return;
    completedOnce = true;
    if(onComplete) onComplete();
  };

  uMeaning.onend = handleEnd;
  uMeaning.onerror = handleEnd;

  qSpeak(uShloka);
  qSpeak(uMeaning);
}

function startPracticeFromAlarm() {
  if(_snoozeTimeout) { clearTimeout(_snoozeTimeout); _snoozeTimeout = null; }
  if(_gitaAutoStartTimer) { clearTimeout(_gitaAutoStartTimer); _gitaAutoStartTimer = null; }
  alarmSnoozeCount = 0;
  qClear(); // Clear quote narration audio before starting practice
  closeGitaQuoteModal();
  if(typeof sess !== "undefined" && !sess.active) {
    if (typeof startFreshPracticeSession === "function") {
      startFreshPracticeSession();
    } else if (typeof window.startFreshPracticeSession === "function") {
      window.startFreshPracticeSession();
    }
  }
}
window.startPracticeFromAlarm = startPracticeFromAlarm;
window.startSession = startPracticeFromAlarm;

function playAlarmBellSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(528, ctx.currentTime); // 528Hz Solfeggio / Temple Bell
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 3.0);
  } catch(e) {}
}

// Global Android Alarm intent bridge
window.setAndroidAlarm = function(h, m) {
  const hour = h !== undefined ? h : (cfg.alarmHour || 5);
  const min  = m !== undefined ? m : (cfg.alarmMinute || 0);
  _tryAndroidAlarm(hour, min);
};

window.setGitaQuoteLanguage = setGitaQuoteLanguage;
window.snoozeAlarm = snoozeAlarm;

/* ═══════════════════════════════════════════════════════════════
   DAILY ALARM SYSTEM
   1. setTimeout fires at exact alarm time in browser / web PWA
   2. Service Worker & Notification API trigger notification
   3. Android system alarm deep-link opens Clock app
   4. visibilitychange — when user opens app near alarm time, speak greeting
═══════════════════════════════════════════════════════════════ */

async function clearAppCacheAndReload() {
  if (confirm("Clear old app cache & reload the updated version? (Your workout history will be preserved)")) {
    try {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let reg of registrations) {
          await reg.unregister();
        }
      }
      if ("caches" in window) {
        const keys = await caches.keys();
        for (let key of keys) {
          await caches.delete(key);
        }
      }
      alert("✓ Old cache cleared! Reloading updated version...");
      window.location.reload(true);
    } catch (e) {
      window.location.reload();
    }
  }
}
window.clearAppCacheAndReload = clearAppCacheAndReload;

async function requestNotificationPermission() {
  if(!("Notification" in window)) return false;
  if(Notification.permission === "granted") return true;
  if(Notification.permission === "denied") return false;
  try {
    const result = await Notification.requestPermission();
    return result === "granted";
  } catch(e) { return false; }
}

let _notifBlinkInterval = null;

function blinkAppIconNotification(customTitle) {
  const icon = document.getElementById("header-smiling-sun-icon");
  if (icon) {
    icon.classList.add("sun-blinking-notif");
    setTimeout(() => {
      icon.classList.remove("sun-blinking-notif");
    }, 10000);
  }

  // App badge on mobile/PWA
  if ("setAppBadge" in navigator) {
    try { navigator.setAppBadge(1); } catch (e) {}
  }

  // Flash tab title
  const origTitle = document.title;
  let count = 0;
  if (_notifBlinkInterval) clearInterval(_notifBlinkInterval);
  _notifBlinkInterval = setInterval(() => {
    document.title = (count % 2 === 0) ? "☀️ 🔔 New Reminder! · Suryasarthi" : origTitle;
    count++;
    if (count >= 12) {
      clearInterval(_notifBlinkInterval);
      document.title = origTitle;
      if ("clearAppBadge" in navigator) {
        try { navigator.clearAppBadge(); } catch (e) {}
      }
    }
  }, 800);
}
window.blinkAppIconNotification = blinkAppIconNotification;

async function sendSystemNotification(title, options = {}) {
  blinkAppIconNotification(title);

  if (!("Notification" in window)) return false;
  if (Notification.permission !== "granted") {
    const granted = await requestNotificationPermission();
    if (!granted) return false;
  }

  const defaultOptions = {
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    vibrate: [300, 100, 300, 100, 300],
    requireInteraction: true,
    tag: "surya-lockscreen-notif",
    renotify: true,
    ...options
  };

  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, defaultOptions);
        return true;
      }
    }
  } catch (e) {
    console.warn("SW showNotification error, falling back to window Notification:", e);
  }

  try {
    const n = new Notification(title, defaultOptions);
    if (options.onclick) n.onclick = options.onclick;
    return true;
  } catch (e) {
    console.warn("Window Notification error:", e);
    return false;
  }
}

function showBatteryOptModal() {
  const modal = document.getElementById("battery-opt-modal");
  if (modal) {
    modal.style.display = "flex";
    requestNotificationPermission();
  }
}

function closeBatteryOptModal() {
  const modal = document.getElementById("battery-opt-modal");
  if (modal) modal.style.display = "none";
}

async function testLockscreenNotification() {
  const granted = await requestNotificationPermission();
  if (!granted) {
    alert("Please allow notification permissions in your browser when prompted!");
    return;
  }

  const name = cfg.userName || "Vaibhav";
  const success = await sendSystemNotification(`☀️ System Notification Test · ${name}`, {
    body: `☀️ Lock-Screen Notifications Active! Your workout and daily alarm reminders will appear here.`,
    tag: "surya-test-notif",
    vibrate: [300, 100, 300],
    data: { type: "test" }
  });

  if (success) {
    alert("✓ Test Notification Sent! Lock your phone screen now to test lock-screen reminders!");
  } else {
    alert("⚠️ Could not send notification. Please check browser Notification permissions in Android Settings.");
  }
}

// ── Morning greeting: fires when app opened near alarm time ─────
function checkMorningGreeting() {
  if(!cfg.alarmOn) return;
  const now  = new Date();
  const ah   = cfg.alarmHour   || 5;
  const am   = cfg.alarmMinute || 0;
  const alarmToday = new Date(now.getFullYear(),now.getMonth(),now.getDate(),ah,am,0);
  const diffMin = (now - alarmToday) / 60000;
  if(diffMin >= 0 && diffMin <= 60) {
    const goal = todayGoal();
    const name = cfg.userName || "Vaibhav";
    setTimeout(()=>speakText(
      "Good morning " + name + "! Time for Surya Namaskara. " +
      "Today's target is " + goal + " rounds. Om Mitraya Namaha."
    ), 1000);
  }
}

// ── Core alarm: setTimeout fires at exact alarm time ─────────
let _alarmTimeout = null;

function msUntilAlarm(h, m) {
  const now  = new Date();
  const next = new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,0,0);
  if(next <= now) next.setDate(next.getDate() + 1);  // already passed → tomorrow
  return next.getTime() - now.getTime();
}

function fmtAlarmTime(h, m) {
  const ampm = h >= 12 ? "PM" : "AM";
  const hh   = h % 12 || 12;
  return hh + ":" + String(m).padStart(2,"0") + " " + ampm;
}

function fireAlarm(isSnooze = false) {
  if(!cfg.alarmOn && !isSnooze) { scheduleAlarm(); return; }

  if(!isSnooze) {
    alarmSnoozeCount = 0;
  }

  const goal = todayGoal();
  const quote = getDailyGitaQuote();
  const meaning = getQuoteMeaning(quote);
  const titleTag = isSnooze
    ? `⏰ Snooze Alarm (${alarmSnoozeCount}/2) · Bhagavad Gita`
    : `☀️ श्रीमद्भगवद्गीता — Daily Motivation`;
  const notifMsg = quote.ref + "\n" + quote.sanskrit.replace(/\n/g, " ") + "\n" + meaning;

  // 1. Play temple chime sound
  playAlarmBellSound();

  // 2. Open Bhagavad Gita Motivational Quote Modal
  showGitaQuoteModal();

  // 3. Show System Notification
  if("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification(titleTag, {
        body   : notifMsg,
        icon   : "./icon-192.png",
        badge  : "./icon-192.png",
        tag    : "surya-daily-alarm",
        renotify: true,
        vibrate: [300,100,300,100,600],
      });
      n.onclick = ()=>{ 
        try { window.focus(); } catch(e){}
        showGitaQuoteModal();
        n.close(); 
      };
    } catch(e) { console.warn("Notification error:", e); }
  }

  // 4. AUTO-PLAY Shloka & Meaning immediately when alarm / snooze triggers
  setTimeout(()=>speakCurrentGitaQuote(), 600);

  // 5. Reschedule regular daily alarm for tomorrow if not a snooze
  if(!isSnooze) {
    scheduleAlarm();
  }
}

function scheduleAlarm() {
  if(_alarmTimeout) { clearTimeout(_alarmTimeout); _alarmTimeout = null; }
  if(!cfg.alarmOn) return;

  const h  = cfg.alarmHour   || 5;
  const m  = cfg.alarmMinute || 0;
  const ms = msUntilAlarm(h, m);

  // Request notification permission if not yet decided
  requestNotificationPermission();

  // Schedule JS timer reliably
  _alarmTimeout = setTimeout(fireAlarm, ms);
  console.log("Alarm timer set for", fmtAlarmTime(h, m), "— fires in", Math.round(ms/1000), "sec");
}

function _tryAndroidAlarm(h, m) {
  const hour = parseInt(h !== undefined ? h : (cfg.alarmHour || 5));
  const min  = parseInt(m !== undefined ? m : (cfg.alarmMinute || 0));
  const name = cfg.userName || "Vaibhav";
  const label = "Suryasarthi 108 - " + name;
  const timeStr = String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0');

  // Primary SET_ALARM Intent
  const intentSet = `intent:#Intent;action=android.intent.action.SET_ALARM;i.android.intent.extra.alarm.HOUR=${hour};i.android.intent.extra.alarm.MINUTES=${min};S.android.intent.extra.alarm.MESSAGE=${encodeURIComponent(label)};B.android.intent.extra.alarm.SKIP_UI=false;end`;

  // Secondary SHOW_ALARMS Intent (Opens Clock app directly)
  const intentShow = `intent:#Intent;action=android.intent.action.SHOW_ALARMS;end`;

  // Legacy intent:// format
  const intentLegacy = `intent://alarm/#Intent;action=android.intent.action.SET_ALARM;extra.android.intent.extra.alarm.HOUR=${hour};extra.android.intent.extra.alarm.MINUTES=${min};extra.android.intent.extra.alarm.MESSAGE=${encodeURIComponent(label)};extra.android.intent.extra.alarm.SKIP_UI=false;end`;

  // Update in-page status info (no thread-blocking alert!)
  const infoEl = document.getElementById("cfg-voice-info");
  if (infoEl) {
    infoEl.textContent = "⏰ Opening Clock app for " + timeStr + " (" + label + ")…";
    infoEl.style.color = "var(--acc-lt)";
  }

  // Trigger direct intent navigation synchronously
  try {
    window.location.href = intentSet;
  } catch (e1) {
    try {
      window.location.href = intentShow;
    } catch (e2) {
      try {
        window.location.href = intentLegacy;
      } catch (e3) {
        console.warn("Android Clock intent navigation unavailable.");
      }
    }
  }
}

function cancelAlarm() {
  if(_alarmTimeout) { clearTimeout(_alarmTimeout); _alarmTimeout = null; }
  setStatus("Alarm cancelled");
}

/* ═══════════════════════════════════════════════════════════════
   DAYTIME BEST-FRIEND COMPANION NOTIFICATION SYSTEM
   Connects with user throughout the day with a warm, encouraging,
   workout-partner brand voice in Hindi, Marathi, and English.
   Autoplays voice utterance when notification is clicked.
═══════════════════════════════════════════════════════════════ */

const DAYTIME_NOTIFICATIONS = {
  morning: [
    {
      title: "🌞 Morning Sunshine Check-In",
      badge: "🌅 Morning Reminder",
      avatar: "🌞",
      en: "The sun has checked in. Are you coming?",
      hi: "सूरज आ चुका है, आपका इंतज़ार कर रहा है! क्या आप आ रहे हैं?",
      mr: "सूर्यदेव आले आहेत, तुझी वाट पाहत आहेत! तू येतोयस ना?"
    },
    {
      title: "☀️ Your Mat Misses You!",
      badge: "☀️ Morning Reminder",
      avatar: "☀️",
      en: "We saved your mat. It misses your footsteps.",
      hi: "हमने आपकी चटाई संभाल कर रखी है, इसे आपके कदमों की याद आ रही है।",
      mr: "आम्ही तुझी मॅट सांभाळून ठेवली आहे, तिला तुझ्या पावलांची आठवण येतेय."
    },
    {
      title: "🙏 Your First Bow is Waiting",
      badge: "🙏 Morning Reminder",
      avatar: "🙏",
      en: "Your first Surya Namaskar is waiting. The rest will follow.",
      hi: "पहला सूर्य नमस्कार आपका इंतज़ार कर रहा है, बाकी सब अपने आप हो जाएगा।",
      mr: "पहिला सूर्य नमस्कार तुझी वाट पाहत आहे, बाकी सर्व सहज घडेल."
    },
    {
      title: "💛 Good Morning, Friend!",
      badge: "💛 Morning Reminder",
      avatar: "💛",
      en: "Good morning! Your body is ready before your mind is.",
      hi: "गुड मॉर्निंग! मन से पहले आपका शरीर आज के अभ्यास के लिए तैयार है।",
      mr: "गुड मॉर्निंग! मनापेक्षा आधी तुझे शरीर आजच्या सरावासाठी सज्ज आहे."
    },
    {
      title: "🌅 Five Minutes for You",
      badge: "🌅 Morning Reminder",
      avatar: "🌅",
      en: "Five minutes now. You'll thank yourself all day.",
      hi: "बस 5 मिनट का अभ्यास, और पूरा दिन आप खुद को धन्यवाद देंगे।",
      mr: "फक्त ५ मिनिटांचा सराव, आणि दिवसभर तू स्वतःला धन्यवाद देशील."
    }
  ],

  skipped: [
    {
      title: "😌 Today is a Fresh Start",
      badge: "😌 Gentle Catch-Up",
      avatar: "😌",
      en: "We noticed yesterday was a rest day. Today is a fresh start.",
      hi: "कल विश्राम का दिन था! आज एक नई और ताज़ा शुरुआत का दिन है।",
      mr: "काल विश्रांतीचा दिवस होता! आज एका नवीन व ताज्या सुरुवातीचा दिवस आहे."
    },
    {
      title: "🧘 Your Streak is Waiting",
      badge: "🧘 Streak Encouragement",
      avatar: "🧘",
      en: "Your streak isn't angry. It's just waiting for you.",
      hi: "आपकी स्ट्राइक नाराज़ नहीं है, वह बस आपके लौटने का इंतज़ार कर रही है।",
      mr: "तुझी स्ट्राइक रागावलेली नाही, ती फक्त तू येण्याची वाट पाहतेय."
    },
    {
      title: "🌞 Another Beautiful Chance",
      badge: "🌞 Fresh Opportunity",
      avatar: "🌞",
      en: "The sun rises every day. You get another chance too.",
      hi: "सूरज हर दिन नया उगता है, आपको भी हर दिन एक नया मौका मिलता है।",
      mr: "सूर्य रोज नवीन उगवतो, तुलाही रोज एक नवीन संधी मिळते."
    },
    {
      title: "💛 Focus on Today's Round",
      badge: "💛 Best Friend Nudge",
      avatar: "💛",
      en: "One missed day doesn't define you. One completed round today does.",
      hi: "एक छूटा हुआ दिन आपको परिभाषित नहीं करता, आज का एक पूरा राउंड करता है!",
      mr: "एक चुकलेला दिवस तुला ठरवत नाही, आज पूर्ण केलेला एक राऊंड ठरवतो!"
    },
    {
      title: "🙏 Your Place is Reserved",
      badge: "🙏 Welcome Back",
      avatar: "🙏",
      en: "We've kept your place on the mat.",
      hi: "मैट पर आपकी जगह आज भी संभाल कर रखी है, आइए साथ अभ्यास करें!",
      mr: "मॅटवर तुझी जागा आजसुद्धा राखीव आहे, चल एकत्र सराव करूया!"
    }
  ],

  playful: [
    {
      title: "🥺 Mat Enquiry!",
      badge: "🥺 Playful Check-In",
      avatar: "🥺",
      en: "Your yoga mat asked where you've been.",
      hi: "आपकी योगा मैट ने पूछा कि आप कहाँ थे? इसे आपकी याद आ रही है!",
      mr: "तुझ्या योगा मॅटने विचारलं, तू कुठे होतास? तिला तुझी आठवण येतेय!"
    },
    {
      title: "☀️ Favorite Person Alert",
      badge: "☀️ Playful Reminder",
      avatar: "☀️",
      en: "The sun showed up. We're just waiting for our favorite person.",
      hi: "सूरज तो समय पर आ गया, बस हम अपने पसंदीदा दोस्त का इंतज़ार कर रहे हैं!",
      mr: "सूर्य वेळेवर आला, आम्ही फक्त आमच्या आवडत्या मित्राची वाट पाहतोय!"
    },
    {
      title: "❤️ Counting Surya Namaskars",
      badge: "❤️ Workout Partner",
      avatar: "❤️",
      en: "We don't count excuses. We count Surya Namaskars.",
      hi: "हम बहाने नहीं गिनते, हम बस आपके सूर्य नमस्कार गिनते हैं!",
      mr: "आम्ही कारणे मोजत नाही, आम्ही फक्त तुमचे सूर्य नमस्कार मोजतो!"
    },
    {
      title: "😄 Refreshing Feed...",
      badge: "😄 Friendly Tease",
      avatar: "😄",
      en: "We've been refreshing... still no Surya Namaskar from you.",
      hi: "हम बार-बार रिफ्रेश कर रहे हैं... अभी तक आपका सूर्य नमस्कार नहीं आया!",
      mr: "आम्ही सतत रिफ्रेश करतोय... अजून तुझा सूर्य नमस्कार आला नाही!"
    },
    {
      title: "🧘 Body Reminder Sent!",
      badge: "🧘 Inner Connection",
      avatar: "🧘",
      en: "Your body sent us a reminder before your phone did.",
      hi: "फोन से पहले आपके शरीर ने हमें याद दिलाया कि आज का अभ्यास बाकी है!",
      mr: "फोनआधी तुझ्या शरीराने आम्हाला आठवण करून दिली की आजचा सराव बाकी आहे!"
    }
  ],

  challenge: [
    {
      title: "🔥 Proud of You",
      badge: "🔥 Challenge Mode",
      avatar: "🔥",
      en: "Today's practice is making future you proud.",
      hi: "आज का अभ्यास शुरू करें! भविष्य का 'आप' आज की मेहनत पर गर्व करेगा।",
      mr: "आजचा सराव सुरू कर! भविष्यातील 'तू' आजच्या कष्टांवर नक्कीच अभिमान बाळगेल."
    },
    {
      title: "💪 Strongest Version",
      badge: "💪 Level Up",
      avatar: "💪",
      en: "One more round. Your strongest version is getting closer.",
      hi: "एक राउंड और! आपका सबसे मजबूत रूप हर दिन करीब आ रहा है।",
      mr: "अजून एक राऊंड! तुझे सर्वात मजबूत रूप दररोज जवळ येत आहे."
    },
    {
      title: "🌞 Tomorrow's Confidence",
      badge: "🌞 Daily Discipline",
      avatar: "🌞",
      en: "Today's round is tomorrow's confidence.",
      hi: "आज का एक राउंड कल आपके आत्मविश्वास को दोगुना कर देगा!",
      mr: "आजचा एक राऊंड उद्या तुझा आत्मविश्वास दुप्पट करेल!"
    },
    {
      title: "🎯 Quiet Consistency",
      badge: "🎯 Transformation",
      avatar: "🎯",
      en: "Consistency is quietly changing your life.",
      hi: "आपकी यह निरंतरता धीरे-धीरे आपकी ज़िंदगी बदल रही है।",
      mr: "तुझं हे सातत्य हळूहळू तुझं आयुष्य बदलत आहे."
    },
    {
      title: "🙌 Promise to Yourself",
      badge: "🙌 Sacred Promise",
      avatar: "🙌",
      en: "Every bow to the sun is a promise to yourself.",
      hi: "सूरज को किया हर नमन, खुद से किया एक सच्चा वादा है।",
      mr: "सूर्याला केलेला प्रत्येक नमस्कार, स्वतःला दिलेला एक खरा शब्द आहे."
    }
  ],

  milestone: [
    {
      title: "🎉 21 Days Milestone!",
      badge: "🎉 Habit Milestone",
      avatar: "🎉",
      en: "21 days! Habits are beginning to choose you.",
      hi: "21 दिन पूरे! अब यह आदत आपको एक स्वस्थ जीवन की ओर ले जा रही है।",
      mr: "२१ दिवस पूर्ण! आता ही सवय तुला एका निरोगी आयुष्याकडे घेऊन जात आहे."
    },
    {
      title: "🏅 108 Pure Discipline!",
      badge: "🏅 Century Milestone",
      avatar: "🏅",
      en: "108 completed! That's discipline, not luck.",
      hi: "108 सूर्य नमस्कार पूरे! यह किस्मत नहीं, आपका अटूट अनुशासन है!",
      mr: "१०८ सूर्य नमस्कार पूर्ण! हे नशीब नाही, तुझी अथांग शिस्त आहे!"
    },
    {
      title: "🌟 500 Legend Status",
      badge: "🌟 Grand Milestone",
      avatar: "🌟",
      en: "500 Surya Namaskars. Your dedication deserves a standing ovation.",
      hi: "500 सूर्य नमस्कार! आपका यह समर्पण वाकई अद्भुत है!",
      mr: "५०० सूर्य नमस्कार! तुझं हे समर्पण खरंच वाखाणण्याजोगे आहे!"
    },
    {
      title: "💯 1000 Club Member!",
      badge: "💯 Supreme Milestone",
      avatar: "💯",
      en: "Four digits look good on you. Welcome to the 1000 club!",
      hi: "1000 सूर्य नमस्कार पूरे! 1000 क्लब में आपका स्वागत है दोस्त!",
      mr: "१००० सूर्य नमस्कार पूर्ण! १००० क्लबमध्ये तुझे सहर्ष स्वागत आहे मित्रा!"
    },
    {
      title: "🙏 Inspiring Journey",
      badge: "🙏 Inspiration",
      avatar: "🙏",
      en: "Your journey is inspiring someone who hasn't started yet.",
      hi: "आपकी यह यात्रा किसी ऐसे इंसान को प्रेरणा दे रही है जिसने अभी शुरुआत भी नहीं की।",
      mr: "तुझा हा प्रवास अशा व्यक्तीला प्रेरणा देतोय ज्याने अजून सुरुवातही केलेली नाही."
    }
  ],

  nudges: [
    {
      title: "⏰ 5 Minutes, 12 Poses",
      badge: "⏰ Quick Nudge",
      avatar: "⏰",
      en: "Five minutes. Twelve poses. One happier you.",
      hi: "बस 5 मिनट, 12 आसन, और एक अधिक खुशहाल आप!",
      mr: "फक्त ५ मिनिटे, १२ आसने, आणि एक अधिक आनंदी तू!"
    },
    {
      title: "☀️ Move First, Feel Inspired",
      badge: "☀️ Gentle Push",
      avatar: "☀️",
      en: "Don't wait to feel motivated. Move first.",
      hi: "प्रेरणा का इंतज़ार मत करो, पहला कदम बढ़ाओ, प्रेरणा खुद आएगी!",
      mr: "प्रेरणेची वाट पाहू नकोस, पहिले पाऊल टाक, प्रेरणा आपोआप येईल!"
    },
    {
      title: "💛 Thank You Note From Future You",
      badge: "💛 Best Friend Note",
      avatar: "💛",
      en: "Your future self left you a thank-you note. It starts with today's practice.",
      hi: "आपके आने वाले कल ने आपको धन्यवाद कहा है, जिसकी शुरुआत आज के अभ्यास से होती है।",
      mr: "तुझ्या येणाऱ्या उद्याने तुला धन्यवाद मानले आहेत, ज्याची सुरुवात आजच्या सरावाने होते."
    },
    {
      title: "🌿 Energy is Created",
      badge: "🌿 Energy Spark",
      avatar: "🌿",
      en: "Energy isn't found. It's created.",
      hi: "ऊर्जा कहीं ढूंढनी नहीं पड़ती, सूर्य नमस्कार से खुद पैदा होती है!",
      mr: "ऊर्जा कुठे शोधावी लागत नाही, सूर्य नमस्काराने स्वतः निर्माण होते!"
    },
    {
      title: "🧘 Just One Round!",
      badge: "🧘 Micro Goal",
      avatar: "🧘",
      en: "Just one round. We know you'll do another.",
      hi: "बस एक राउंड कर के देखिए, हमें यकीन है आप दूसरा भी कर लेंगे!",
      mr: "फक्त एक राऊंड करून बघ, आम्हाला खात्री आहे तू दुसराही करशील!"
    }
  ],

  emotional: [
    {
      title: "❤️ Show Up Today",
      badge: "❤️ Best Friend Love",
      avatar: "❤️",
      en: "We don't want perfection. We just want to see you today.",
      hi: "हमें परफेक्शन नहीं चाहिए, हमें बस आज आपको मैट पर देखना है।",
      mr: "आम्हाला परिपूर्णता नकोय, आम्हाला फक्त आज तुला मॅटवर बघायचे आहे."
    },
    {
      title: "🌅 Meet Yourself Today",
      badge: "🌅 Soul Connection",
      avatar: "🌅",
      en: "The sun has never missed meeting you. Don't miss meeting yourself.",
      hi: "सूरज ने कभी आपसे मिलना नहीं छोड़ा, आज आप खुद से मिलना मत भूलना।",
      mr: "सूर्याने कधीही तुला भेटणे सोडले नाही, आज तू स्वतःला भेटायला विसरू नकोस."
    },
    {
      title: "🙏 Conversation With Your Body",
      badge: "🙏 Body Awareness",
      avatar: "🙏",
      en: "Every Surya Namaskar is a conversation with your body.",
      hi: "हर सूर्य नमस्कार आपके शरीर और आत्मा के बीच का एक खूबसूरत संवाद है।",
      mr: "प्रत्येक सूर्य नमस्कार हा तुझ्या शरीर आणि आत्म्यामधील एक सुंदर संवाद आहे."
    },
    {
      title: "💛 Investment in Health",
      badge: "💛 True Wealth",
      avatar: "💛",
      en: "Some investments pay in money. This one pays in health.",
      hi: "कुछ निवेश पैसों में रिटर्न देते हैं, यह निवेश आपको बेहतरीन सेहत देता है।",
      mr: "काही गुंतवणुकी पैशात परतावा देतात, ही गुंतवणूक तुला उत्तम आरोग्य देते."
    },
    {
      title: "🌞 Show Up For Yourself",
      badge: "🌞 Daily Promise",
      avatar: "🌞",
      en: "Show up for yourself. We'll handle the reminder.",
      hi: "आप खुद के लिए समय निकालिए, याद दिलाने की ज़िम्मेदारी हमारी है!",
      mr: "तू स्वतःसाठी वेळ काढ, आठवण करून देण्याची जबाबदारी आमची!"
    }
  ]
};

let activeCompanionNotification = null;

function getBestFriendNotificationContext(period) {
  const yesterdayDone = todayDoneFor(dayKey(1));
  const todayDoneCount = todayDone();
  const todayGoalCount = todayGoal();
  const streak = computeStreak();
  const totalAllTime = data.totalAllTime || 0;

  // 1. Check for Milestone
  if (streak === 21) return DAYTIME_NOTIFICATIONS.milestone[0];
  if (totalAllTime === 108) return DAYTIME_NOTIFICATIONS.milestone[1];
  if (totalAllTime === 500) return DAYTIME_NOTIFICATIONS.milestone[2];
  if (totalAllTime === 1000) return DAYTIME_NOTIFICATIONS.milestone[3];

  // 2. Check if skipped yesterday
  if (yesterdayDone === 0) {
    const idx = Math.floor(Math.random() * DAYTIME_NOTIFICATIONS.skipped.length);
    return DAYTIME_NOTIFICATIONS.skipped[idx];
  }

  // 3. High goal aim (108)
  if (todayGoalCount >= 108) {
    const idx = Math.floor(Math.random() * DAYTIME_NOTIFICATIONS.challenge.length);
    return DAYTIME_NOTIFICATIONS.challenge[idx];
  }

  // 4. Period specific selection
  let list = DAYTIME_NOTIFICATIONS.morning;
  if (period === "afternoon") {
    list = (todayDoneCount === 0) ? DAYTIME_NOTIFICATIONS.playful : DAYTIME_NOTIFICATIONS.nudges;
  } else if (period === "evening") {
    list = (todayDoneCount < todayGoalCount) ? DAYTIME_NOTIFICATIONS.emotional : DAYTIME_NOTIFICATIONS.nudges;
  }

  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

function getNotificationMessageInLang(item, langOverride) {
  if (!item) return "";
  const lang = langOverride || cfg.quoteLang || cfg.pranaLang || "hi";
  if (lang === "mr") return item.mr || item.hi || item.en;
  if (lang === "en") return item.en || item.hi;
  return item.hi || item.en;
}

function triggerDaytimeNotification(period) {
  if (cfg.daytimeNotifOn === false) return;
  // If user has already finished today's goal and it's afternoon/evening, no need to interrupt
  if (period !== "morning" && todayDone() >= todayGoal()) return;

  const item = getBestFriendNotificationContext(period);
  activeCompanionNotification = item;

  const msg = getNotificationMessageInLang(item);

  // 1. Show System Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification(item.title, {
        body: msg,
        icon: "./icon-192.png",
        badge: "./icon-192.png",
        tag: "surya-daytime-friend",
        renotify: true,
        vibrate: [200, 100, 200]
      });
      n.onclick = () => {
        try { window.focus(); } catch (e) {}
        showCompanionModal(item);
        n.close();
      };
    } catch (e) { console.warn("Notification error:", e); }
  }

  // 2. If app is visible, pop companion card and autoplay voice
  if (document.visibilityState === "visible") {
    showCompanionModal(item);
  }
}

let _daytimeNotifTimer = null;

function scheduleDaytimeNotifications() {
  if (_daytimeNotifTimer) { clearInterval(_daytimeNotifTimer); _daytimeNotifTimer = null; }
  if (cfg.daytimeNotifOn === false) return;

  // Check every 60 seconds if it's time for morning (8:30 AM), afternoon (1:30 PM), or evening (6:30 PM)
  let lastTriggeredHour = -1;

  _daytimeNotifTimer = setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    if (h === lastTriggeredHour) return;

    if (h === 8 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("morning");
    } else if (h === 13 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("afternoon");
    } else if (h === 18 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("evening");
    }
  }, 60000);
}

function showCompanionModal(item) {
  if (!item) item = activeCompanionNotification || getBestFriendNotificationContext("morning");
  activeCompanionNotification = item;

  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const msg = getNotificationMessageInLang(item, lang);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const avEl = document.getElementById("companion-avatar"); if(avEl) avEl.textContent = item.avatar || "☀️";
  const bgEl = document.getElementById("companion-badge");  if(bgEl) bgEl.textContent = "Online · " + (item.badge || "Best Friend Check-In");
  const ttEl = document.getElementById("companion-title");  if(ttEl) ttEl.textContent = item.title || "Suryasarthi Best Friend";
  const bdEl = document.getElementById("companion-body");   if(bdEl) bdEl.textContent = msg;

  const wtEl = document.getElementById("whatsapp-time-label");   if(wtEl) wtEl.textContent = timeStr;
  const btEl = document.getElementById("whatsapp-bubble-time");  if(btEl) btEl.textContent = timeStr;

  const modal = document.getElementById("companion-modal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  // AUTO-PLAY VOICE ON NOTIFICATION OPEN
  setTimeout(() => speakCompanionNotification(item), 400);
}

function closeCompanionModal() {
  const modal = document.getElementById("companion-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

function startPracticeFromCompanion() {
  closeCompanionModal();
  startSession();
}

window.showCompanionModal = showCompanionModal;
window.closeCompanionModal = closeCompanionModal;
window.startPracticeFromCompanion = startPracticeFromCompanion;

function speakCompanionNotification(item) {
  if (voiceMuted || !window.speechSynthesis) return;
  if (!item) item = activeCompanionNotification || getBestFriendNotificationContext("morning");
  
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const msg = getNotificationMessageInLang(item, lang);

  qClear();

  const u = new SpeechSynthesisUtterance(msg);
  if (lang === "en") {
    u.lang = "en-IN"; u.rate = 0.98;
  } else if (lang === "mr") {
    u.lang = "mr-IN"; u.rate = 0.92;
  } else {
    u.lang = "hi-IN"; u.rate = 0.92;
  }

  qSpeak(u);
}

function replayCompanionVoice() {
  speakCompanionNotification(activeCompanionNotification);
}

function startPracticeFromCompanion() {
  closeCompanionModal();
  if (!sess.active) {
    handleMainBtn();
  }
}

window.showGitaQuoteModal = showGitaQuoteModal;
window.closeGitaQuoteModal = closeGitaQuoteModal;
window.speakCurrentGitaQuote = speakCurrentGitaQuote;
window.showBatteryOptModal = typeof showBatteryOptModal !== "undefined" ? showBatteryOptModal : function(){};
window.closeBatteryOptModal = typeof closeBatteryOptModal !== "undefined" ? closeBatteryOptModal : function(){};
window.testLockscreenNotification = typeof testLockscreenNotification !== "undefined" ? testLockscreenNotification : function(){};
window.showCompanionModal = typeof showCompanionModal !== "undefined" ? showCompanionModal : function(){};
window.closeCompanionModal = typeof closeCompanionModal !== "undefined" ? closeCompanionModal : function(){};
window.replayCompanionVoice = typeof replayCompanionVoice !== "undefined" ? replayCompanionVoice : function(){};
window.startPracticeFromCompanion = typeof startPracticeFromCompanion !== "undefined" ? startPracticeFromCompanion : function(){};
window.startPracticeFromAlarm = typeof startPracticeFromAlarm !== "undefined" ? startPracticeFromAlarm : function(){};
window.startSession = typeof startPracticeFromAlarm !== "undefined" ? startPracticeFromAlarm : function(){};
window.snoozeAlarm = typeof snoozeAlarm !== "undefined" ? snoozeAlarm : function(){};
window.setAndroidAlarm = typeof setAndroidAlarm !== "undefined" ? setAndroidAlarm : function(){};
window.checkAndTriggerAlarm = typeof checkAndTriggerAlarm !== "undefined" ? checkAndTriggerAlarm : function(){};

/* ═══════════════════════════════════════════════════════════════
   AYURVEDIC DIET & HYDRATION ENGINE
   Verified 4.9+ Rating Sattvic / Ahara Ayurvedic Meal Guidelines.
   Calculates water & protein intake targets based on today's
   completed Surya Namaskara counts and personalized voice greetings.
═══════════════════════════════════════════════════════════════ */

