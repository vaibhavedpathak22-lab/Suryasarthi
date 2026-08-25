const AYURVEDIC_DIET_PLAN_7DAYS = [
  // DAY 1 (Monday / Day 1)
  {
    dayName: "DAY 1 · SATTVIC RECOVERY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "High-Protein Sattvic Energy Fuel",
        body: "Moong dal chilla stuffed with Paneer, 5 soaked almonds & walnuts, warm turmeric ashwagandha milk.",
        speech: {
          en: "Good morning {NAME}! You completed {SETS} Surya Namaskars. Target: {WATER}L water & {PROTEIN}g protein. Day 1 Menu: Moong dal chilla with Paneer, soaked almonds, turmeric milk.",
          hi: "गुड मॉर्निंग {NAME}! आपने {SETS} सूर्य नमस्कार किए। {WATER}L पानी और {PROTEIN}g प्रोटीन लें। डे 1: पनीर मूंग दाल चिल्ला, बादाम और हल्दी दूध।",
          mr: "गुड मॉर्निंग {NAME}! आज {SETS} सूर्य नमस्कार पूर्ण केले. {WATER}L पाणी आणि {PROTEIN}g प्रोटीन घे. डे १: पनीर मूंग डाळ चिला व हळदीचे दूध."
        }
      },
      nonveg: {
        title: "High-Protein Ayurvedic Recovery Fuel",
        body: "2-3 Egg white omelette prepared in Cow Ghee with cumin & turmeric, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Day 1 Menu: 2-3 Egg white omelette in Ghee with turmeric, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। डे 1: 2-3 एग व्हाइट ऑमलेट घी और हल्दी के साथ, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! आज {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. डे १: २-३ एग व्हाईट ऑम्लेट तूप व हळदीसह आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Peak Agni Digestion & Re-Energizing Meal",
        body: "Moong Khichdi or Multigrain Roti with Cow Ghee, Dal/Soya, cucumber salad & Takra (buttermilk with roasted cumin).",
        speech: {
          en: "Hello {NAME}! Peak digestion time. For {SETS} rounds, drink {WATER}L water & take {PROTEIN}g protein. Lunch: Multigrain Roti with Ghee, Dal, green veggies & buttermilk.",
          hi: "नमस्ते {NAME}! दोपहर में पाचन अग्नि तीव्र है। {WATER}L पानी और {PROTEIN}g प्रोटीन लें। दोपहर में: देसी घी रोटी, दाल, सब्ज़ियाँ और मट्ठा।",
          mr: "नमस्ते {NAME}! पचन शक्ती उत्तम आहे. {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. जेवणात: तुपातील पोळी, डाळ आणि ताक."
        }
      },
      nonveg: {
        title: "Peak Agni Muscle Building Fuel",
        body: "Grilled Chicken breast or Steamed Fish with ginger, turmeric & garlic, Brown Rice, salad & Takra.",
        speech: {
          en: "Hello {NAME}! For {SETS} rounds, aim for {WATER}L water & {PROTEIN}g protein. Lunch: Grilled Chicken or Fish spiced with turmeric, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। दोपहर में: अदरक-हल्दी ग्रिल्ड चिकन या फिश, ब्राउन राइस और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. जेवणात: ग्रिल्ड चिकन किंवा फिश, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Light Digestible Recovery Night Fuel",
        body: "Light Moong Dal Soup or Vegetable Khichdi with Ghee, warm milk with a pinch of nutmeg before sleep.",
        speech: {
          en: "Good evening {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Dinner: Light Moong Dal Soup and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। रात में: हल्की मूंग दाल खिचड़ी और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन पूर्ण कर. रात्री: हलकी खिचडी आणि जायफळयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Light Ayurvedic Night Recovery Meal",
        body: "Chicken Bone Broth or Egg White Soup with sauteed spinach, warm spiced milk with nutmeg.",
        speech: {
          en: "Good evening {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Dinner: Chicken Bone Broth or Egg white soup, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। रात में: हल्का चिकन ब्रोथ या एग व्हाइट सूप और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. रात्री: चिकन सूप किंवा एग व्हाईट सूप आणि गरम दूध."
        }
      }
    }
  },

  // DAY 2 (Tuesday / Day 2)
  {
    dayName: "DAY 2 · SPROUTS & HERBAL STRENGTH MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Sprouted Protein & Digestive Boost",
        body: "Sprouted Moong & Chana chaat with lemon & roasted cumin, 5 soaked walnuts, warm ginger cinnamon tea.",
        speech: {
          en: "Good morning {NAME}! Day 2 Recovery Menu: Sprouted Moong Chaat with lemon and cumin, soaked walnuts, and warm ginger tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 2 नाश्ता: अंकुरित मूंग और चना चाट नींबू-जीरे के साथ, अखरोट और अदरक की चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे २ नाश्ता: भिजवलेले मूग व चणा चाट लिंबू-जिऱ्यासह, अक्रोड आणि आले चहा."
        }
      },
      nonveg: {
        title: "Ayurvedic Scrambled Protein Fuel",
        body: "Scrambled Eggs (3 whites + 1 yolk) with spinach & black pepper in Ghee, 5 soaked walnuts, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 2 Menu: Scrambled eggs with spinach and black pepper cooked in Ghee, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 2: पालक और काली मिर्च वाला स्क्रैम्बल्ड एग घी में, भीगे अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे २: पालकासह स्क्रॅम्बल्ड एग्स तूप व काळ्या मिरीसह, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Palak Paneer & Multigrain Strength Fuel",
        body: "Multigrain Roti with Ghee, Palak Paneer / Soya curry, cucumber salad & mint Takra (buttermilk).",
        speech: {
          en: "Hello {NAME}! Day 2 Lunch: Multigrain Roti with Cow Ghee, Palak Paneer curry, cucumber salad & mint buttermilk.",
          hi: "नमस्ते {NAME}! डे 2 दोपहर का खाना: देसी घी की रोटी, पालक पनीर, खीरा सलाद और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! डे २ जेवण: तुपातील पोळी, पालक पनीर, काकडी कोशिंबीर आणि पुदिना ताक."
        }
      },
      nonveg: {
        title: "Steamed Fish & Coconut Ayurvedic Meal",
        body: "Steamed Fish curry prepared in coconut milk, turmeric & curry leaves, Brown Rice, mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 2 Lunch: Steamed Fish curry in coconut milk & turmeric, Brown Rice, and fresh mint buttermilk.",
          hi: "नमस्ते {NAME}! डे 2: नारियल दूध और हल्दी वाला स्टीम्ड फिश करी, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! डे २: नारळाच्या दुधातील स्टीम्ड फिश करी, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Lauki Detox & Cardamom Milk",
        body: "Bottle Gourd (Lauki) soup with cumin & Ghee, 1 small Jowar Roti, warm cardamom milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 2 Dinner: Light Lauki (Bottle Gourd) soup with Ghee and warm cardamom milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 2 रात का खाना: लौकी का सूप जीरे और घी के साथ, और इलायची वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे २ रात्री: दुधी भोपळ्याचे सूप जिऱ्यासह आणि वेलचीयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Light Fish Broth & Night Recovery",
        body: "Light Fish soup with ginger & coriander, 1 small Jowar Roti, warm cardamom milk.",
        speech: {
          en: "Good evening {NAME}! Day 2 Dinner: Light Fish broth spiced with ginger and coriander, warm cardamom milk.",
          hi: "शुभ संध्या {NAME}! डे 2: अदरक और धनिया वाला हल्का फिश सूप, और गर्म इलायची दूध।",
          mr: "शुभ संध्या {NAME}! डे २: आल्याचा हलका फिश सूप आणि गरम वेलची दूध."
        }
      }
    }
  },

  // DAY 3 (Wednesday / Day 3)
  {
    dayName: "DAY 3 · RAGI & ASHWAGANDHA VITALITY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Calcium & Iron Rich Ragi Sattvic Dosa",
        body: "Ragi (Finger Millet) Dosa / Chilla with Coconut Chutney, 5 soaked almonds, warm Ashwagandha milk.",
        speech: {
          en: "Good morning {NAME}! Day 3 Menu: High-calcium Ragi Dosa with Coconut Chutney, soaked almonds, and Ashwagandha milk.",
          hi: "गुड मॉर्निंग {NAME}! डे 3: कैल्शियम से भरपूर रागी डोसा नारियल चटनी के साथ, बादाम और अश्वगंधा दूध।",
          mr: "गुड मॉर्निंग {NAME}! डे ३: कॅल्शियमयुक्त नाचणी (रागी) डोसा खोबऱ्याच्या चटणीसह आणि अश्वगंधा दूध."
        }
      },
      nonveg: {
        title: "Boiled Egg Protein & Herbal Tea",
        body: "3 Boiled Egg whites topped with roasted cumin & pepper, 5 soaked almonds, warm herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 3 Menu: 3 Boiled Egg whites with roasted cumin and pepper, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 3: भुने जीरे और काली मिर्च वाले 3 उबले अंडे, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ३: जिरे-मिरीसह ३ उकडलेले अंडी, भिजवलेले बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Rajma & Bajra Ayurvedic Thali",
        body: "Bajra Roti with Cow Ghee, Rajma / Chana Dal curry, sauteed vegetables & roasted jeera buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 3 Lunch: Bajra Roti with Cow Ghee, protein-rich Rajma, green salad, and jeera buttermilk.",
          hi: "नमस्ते {NAME}! डे 3 दोपहर का खाना: बाजरे की रोटी देसी घी के साथ, राजमा, हरी सब्ज़ियाँ और जीरा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ३ जेवण: बाजरीची भाकरी तुपासह, राजमा, भाज्या आणि जिरे ताक."
        }
      },
      nonveg: {
        title: "Ayurvedic Spiced Chicken & Jowar Roti",
        body: "Lean Chicken curry in turmeric, coriander & ginger gravy, Jowar Roti, green salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 3 Lunch: Lean Chicken curry prepared in Ayurvedic spices, Jowar Roti, and buttermilk.",
          hi: "नमस्ते {NAME}! डे 3: हल्दी-धनिया से बना चिकन करी, ज्वार की रोटी और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ३: हळद-धनियायुक्त चिकन करी, ज्वारीची भाकरी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Tomato Moong Soup & Saffron Recovery Milk",
        body: "Tomato Basil Moong Soup with Cow Ghee, warm spiced saffron milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 3 Dinner: Light Tomato Moong Soup with Ghee and warm saffron milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 3 रात का खाना: टमाटर मूंग सूप घी के साथ और केसर वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ३ रात्री: टोमॅटो मूग सूप तुपासह आणि केशरयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Coriander Chicken Soup & Saffron Milk",
        body: "Light Chicken soup with coriander & cumin, warm spiced saffron milk.",
        speech: {
          en: "Good evening {NAME}! Day 3 Dinner: Clear Chicken soup with fresh coriander, followed by warm saffron milk.",
          hi: "शुभ संध्या {NAME}! डे 3: धनिया और जीरे वाला हल्का चिकन सूप और गर्म केसर दूध।",
          mr: "शुभ संध्या {NAME}! डे ३: कोथिंबीर-जिऱ्याचा हलका चिकन सूप आणि केशर दूध."
        }
      }
    }
  },

  // DAY 4 (Thursday / Day 4)
  {
    dayName: "DAY 4 · SATTU & RECOVERY FUEL MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Roasted Sattu Vitality Drink",
        body: "Roasted Sattu Protein Shake (Sattu + Jaggery + Cardamom + Water/Milk), 5 soaked walnuts & figs.",
        speech: {
          en: "Good morning {NAME}! Day 4 Menu: Natural Sattu Protein Shake with jaggery and cardamom, soaked walnuts & figs.",
          hi: "गुड मॉर्निंग {NAME}! डे 4 नाश्ता: सत्तू प्रोटीन शेक गुड़ और इलायची के साथ, अखरोट और अंजीर।",
          mr: "गुड मॉर्निंग {NAME}! डे ४ नाश्ता: सत्तू प्रोटीन शेक गूळ व वेलचीसह, अक्रोड आणि अंजीर."
        }
      },
      nonveg: {
        title: "Egg Bhurji & Herbal Tea",
        body: "Egg Bhurji (2 eggs) prepared in Ghee with turmeric & coriander, soaked walnuts & figs, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 4 Menu: Fresh Egg Bhurji cooked in Ghee with turmeric and coriander, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 4: देसी घी में बनी एग भुर्जी हल्दी-धनिया के साथ, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ४: तुपातील एग भुर्जी हळद व कोथिंबिरीसह, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Mix Veg Khichdi & Paneer Bhurji",
        body: "Mix Veg Dal Khichdi with Cow Ghee, Paneer bhurji, beetroot salad & roasted cumin buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 4 Lunch: Nutritious Mix Veg Khichdi with Cow Ghee, Paneer Bhurji, beetroot salad & buttermilk.",
          hi: "नमस्ते {NAME}! डे 4 दोपहर का खाना: मिक्स वेज खिचड़ी देसी घी के साथ, पनीर भुर्जी, चुकंदर सलाद और मट्ठा।",
          mr: "नमस्ते {NAME}! डे ४ जेवण: मिक्स व्हेज खिचडी तुपासह, पनीर भुर्जी आणि ताक."
        }
      },
      nonveg: {
        title: "Grilled Cumin Chicken & Multigrain Roti",
        body: "Grilled Chicken Tiffin with roasted cumin & herbs, Multigrain Roti, green salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 4 Lunch: Grilled Cumin Chicken, Multigrain Roti, green salad, and digestive buttermilk.",
          hi: "नमस्ते {NAME}! डे 4: भुने जीरे वाला ग्रिल्ड चिकन, मल्टीग्रेन रोटी, सलाद और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ४: जिरे ग्रिल्ड चिकन, पोळी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Pumpkin Soup & Nutmeg Milk",
        body: "Creamy Pumpkin Soup cooked with cumin & Cow Ghee, warm nutmeg milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 4 Dinner: Light Pumpkin Soup with Ghee and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 4 रात का खाना: कद्दू का हल्का सूप जीरे के साथ और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ४ रात्री: भोपळ्याचे सूप जिऱ्यासह आणि जायफळ दूध."
        }
      },
      nonveg: {
        title: "Clear Chicken Broth & Nutmeg Milk",
        body: "Clear Chicken broth with spinach & black pepper, warm nutmeg milk.",
        speech: {
          en: "Good evening {NAME}! Day 4 Dinner: Clear Chicken broth with spinach, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! डे 4: पालक और काली मिर्च वाला चिकन ब्रोथ और गर्म जायफल दूध।",
          mr: "शुभ संध्या {NAME}! डे ४: पालकाचा हलका चिकन ब्रोथ आणि जायफळ दूध."
        }
      }
    }
  },

  // DAY 5 (Friday / Day 5)
  {
    dayName: "DAY 5 · BESAN & BANANA LEAF FISH MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Besan Chilla & Golden Turmeric Milk",
        body: "Besan Chilla stuffed with Paneer & fresh coriander, 5 soaked almonds, warm golden turmeric milk.",
        speech: {
          en: "Good morning {NAME}! Day 5 Menu: High-protein Besan Chilla with Paneer, soaked almonds, and golden turmeric milk.",
          hi: "गुड मॉर्निंग {NAME}! डे 5 नाश्ता: बेसन चिल्ला पनीर के साथ, बादाम और हल्दी दूध।",
          mr: "गुड मॉर्निंग {NAME}! डे ५ नाश्ता: बेसन चिला पनीरसह, भिजवलेले बदाम आणि हळदीचे दूध."
        }
      },
      nonveg: {
        title: "Boiled Eggs & Pepper Ghee Boost",
        body: "3 Boiled Egg whites + 1 Whole Egg with black pepper & Ghee, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 5 Menu: Boiled Eggs sprinkled with black pepper and Ghee, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 5: काली मिर्च और घी वाले उबले अंडे, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ५: मिरी व तुपातील उकडलेले अंडी, बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Paneer Peas Curry & Curd Rice",
        body: "Paneer & Green Peas curry, Multigrain Roti with Ghee, cucumber curd rice / buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 5 Lunch: Paneer Green Peas curry, Multigrain Roti with Ghee, and fresh curd rice.",
          hi: "नमस्ते {NAME}! डे 5 दोपहर का खाना: मटर पनीर सब्ज़ी, देसी घी रोटी और ताज़ा दही-चावल।",
          mr: "नमस्ते {NAME}! डे ५ जेवण: मटार पनीर भाजी, तुपातील पोळी आणि दही भात."
        }
      },
      nonveg: {
        title: "Banana Leaf Fish & Brown Rice",
        body: "Steamed Fish in banana leaf with turmeric & mustard seeds, Brown Rice, fresh buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 5 Lunch: Steamed Fish wrapped in banana leaf with mustard & turmeric, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! डे 5: केले के पत्ते में स्टीम्ड फिश करी, ब्राउन राइस और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ५: केळीच्या पानातील वाफवलेला मासा, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Light Oats Moong Kitchari & Spiced Milk",
        body: "Light Oats & Moong Dal Kitchari with Ghee, warm spiced milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 5 Dinner: Light Oats Moong Khichdi with Ghee and warm spiced milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 5 रात का खाना: ओट्स और मूंग दाल की हल्की खिचड़ी और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ५ रात्री: ओट्स मूग डाळ खिचडी आणि गरम दूध."
        }
      },
      nonveg: {
        title: "Egg White Ginger Broth & Spiced Milk",
        body: "Egg White Soup in ginger & garlic broth, warm spiced milk.",
        speech: {
          en: "Good evening {NAME}! Day 5 Dinner: Egg White soup in ginger garlic broth, followed by warm milk.",
          hi: "शुभ संध्या {NAME}! डे 5: अदरक-लहसुन वाला एग व्हाइट सूप और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ५: आले-लसूण एग व्हाईट सूप आणि गरम दूध."
        }
      }
    }
  },

  // DAY 6 (Saturday / Day 6)
  {
    dayName: "DAY 6 · PARATHA & CHICKEN CURRY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Multigrain Paneer Paratha & Herbal Tea",
        body: "Paneer Paratha (Multigrain) prepared in Cow Ghee, 5 soaked walnuts & almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 6 Menu: Multigrain Paneer Paratha prepared in Cow Ghee, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 6 नाश्ता: देसी घी में बना पनीर पराठा, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ६ नाश्ता: तुपातील पनीर पराठा, अक्रोड आणि हर्बल चहा."
        }
      },
      nonveg: {
        title: "Chicken Sausage Omelette & Herbal Tea",
        body: "Chicken Sausage / Egg White Omelette with peppers & Ghee, 5 soaked walnuts, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 6 Menu: Chicken Sausage Egg white omelette cooked in Ghee, soaked walnuts & tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 6: घी में बना चिकन सॉसेज एग ऑमलेट, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ६: तुपातील चिकन सॉसेज ऑम्लेट, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Black Chickpea Chana & Jowar Roti",
        body: "Chana Masala (Black Chickpeas), Jowar Roti with Ghee, cucumber salad & cumin buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 6 Lunch: Protein-packed Black Chana Curry, Jowar Roti with Ghee, and cumin buttermilk.",
          hi: "नमस्ते {NAME}! डे 6 दोपहर का खाना: काला चना मसाला, ज्वार की रोटी देसी घी के साथ और जीरा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ६ जेवण: काळा चणा मसाला, ज्वारीची भाकरी तुपासह आणि ताक."
        }
      },
      nonveg: {
        title: "Light Chicken Curry & Jowar Roti",
        body: "Chicken Curry in light tomato-ginger gravy, Jowar Roti with Ghee, cucumber salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 6 Lunch: Light Chicken Curry cooked with tomato & ginger, Jowar Roti, and fresh buttermilk.",
          hi: "नमस्ते {NAME}! डे 6: टमाटर-अदरक ग्रेवी वाला चिकन करी, ज्वार की रोटी और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ६: टोमॅटो-आले चिकन करी, ज्वारीची भाकरी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Spinach Sweet Corn Soup & Nutmeg Milk",
        body: "Spinach & Sweet Corn Soup with Cow Ghee, warm nutmeg milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 6 Dinner: Light Spinach & Corn Soup with Ghee and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 6 रात का खाना: पालक और कॉर्न सूप घी के साथ और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ६ रात्री: पालक कॉर्न सूप तुपासह आणि जायफळ दूध."
        }
      },
      nonveg: {
        title: "Clear Chicken Broth & Nutmeg Milk",
        body: "Clear Chicken Broth with pepper & Ghee, warm nutmeg milk.",
        speech: {
          en: "Good evening {NAME}! Day 6 Dinner: Clear Chicken Broth with pepper, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! डे 6: काली मिर्च वाला चिकन ब्रोथ और गर्म जायफल दूध।",
          mr: "शुभ संध्या {NAME}! डे ६: मिरीचा हलका चिकन ब्रोथ आणि जायफळ दूध."
        }
      }
    }
  },

  // DAY 7 (Sunday / Day 7)
  {
    dayName: "DAY 7 · GRAND SATTVIC THALI & SLEEP RECOVERY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Vegetable Upma & Herbal Tea",
        body: "Upma with veggies & roasted peanuts, 5 soaked almonds & figs, warm herbal tea.",
        speech: {
          en: "Good morning {NAME}! Sunday Special Menu: Vegetable Upma with roasted peanuts, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! संडे स्पेशल नाश्ता: वेजिटेबल उपमा मूंगफली के साथ, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! संडे नाश्ता: व्हेज उपमा शेंगदाण्यांसह, बदाम आणि हर्बल चहा."
        }
      },
      nonveg: {
        title: "Poached Eggs on Toast & Herbal Tea",
        body: "2 Poached Eggs on Multigrain toast with black pepper & Ghee, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Sunday Menu: Poached Eggs on Multigrain toast sprinkled with pepper & Ghee, soaked almonds.",
          hi: "गुड मॉर्निंग {NAME}! संडे: पोच्ड एग्स मल्टीग्रेन टोस्ट पर, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! संडे: पोच्ड एग्स टोस्टवर, बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Grand Sattvic Feast Thali",
        body: "Special Sattvic Thali: Dal Tadka in Ghee, Paneer, Brown Rice, Multigrain Roti, mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Sunday Feast Lunch: Special Sattvic Thali with Dal Tadka in Cow Ghee, Paneer, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! संडे स्पेशल दोपहर का खाना: देसी घी दाल तड़का, पनीर, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! संडे स्पेशल जेवण: तुपातील दाल तडका, पनीर, ब्राऊन राईस आणि ताक."
        }
      },
      nonveg: {
        title: "Special Ayurvedic Chicken/Fish Thali",
        body: "Ayurvedic Chicken/Fish Thali: Grilled Chicken/Fish, Brown Rice, Multigrain Roti, fresh mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Sunday Special Lunch: Ayurvedic Chicken or Fish Thali, Brown Rice, Multigrain Roti, and buttermilk.",
          hi: "नमस्ते {NAME}! संडे स्पेशल: आयुर्वेदिक ग्रिल्ड चिकन/फिश थाली, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! संडे स्पेशल: आयुर्वेदिक चिकन/फिश थाळी, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Mix Veg Soup & Deep Sleep Ashwagandha Milk",
        body: "Light Mixed Veg Soup with Ghee, warm Ashwagandha milk for deep sleep muscle recovery.",
        speech: {
          en: "Good evening {NAME}! Sunday Recovery Dinner: Light Mixed Veg Soup with Ghee and Ashwagandha milk for deep sleep.",
          hi: "शुभ संध्या {NAME}! संडे रात का खाना: मिक्स वेज सूप घी के साथ और गहरी नींद के लिए अश्वगंधा दूध।",
          mr: "शुभ संध्या {NAME}! संडे रात्री: मिक्स व्हेज सूप तुपासह आणि शांत झोपेसाठी अश्वगंधा दूध."
        }
      },
      nonveg: {
        title: "Mutton/Chicken Broth & Sleep Recovery Milk",
        body: "Light Mutton or Chicken Broth, warm Ashwagandha milk for deep sleep muscle recovery.",
        speech: {
          en: "Good evening {NAME}! Sunday Recovery Dinner: Light Mutton or Chicken Broth, followed by warm Ashwagandha milk.",
          hi: "शुभ संध्या {NAME}! संडे: मटन या चिकन का हल्का ब्रोथ और गहरी नींद के लिए अश्वगंधा दूध।",
          mr: "शुभ संध्या {NAME}! संडे: मटण किंवा चिकन सूप आणि शांत झोपेसाठी अश्वगंधा दूध."
        }
      }
    }
  }
];

function calcAyurvedicHydrationAndProtein() {
  const sets = todayDone();
  const weight = cfg.userWeight || 66;
  const bottleMl = cfg.bottleMl || 1000;
  const burnedKcal = Math.round(todayCalories());

  // 1. Water requirement: 35ml per kg body weight + 30ml per set of Surya Namaskar
  const waterLiters = (weight * 0.035 + sets * 0.03).toFixed(1);
  const totalWaterMl = Math.round(waterLiters * 1000);

  // Calculate target bottle/container count based on selected bottle capacity
  const targetContainers = Math.max(1, Math.ceil(totalWaterMl / bottleMl));
  const containerLabel = bottleMl >= 1000 ? (bottleMl / 1000 + " L Bottle") : (bottleMl + " ml");

  // 2. Weight Loss Calorie Target & Expenditure
  const bmr = Math.round(22 * weight);
  const tdee = Math.round(bmr * 1.35 + burnedKcal);
  const targetIntakeKcal = Math.max(1200, tdee - 500);

  // 3. 4-Macronutrient & Fiber Calculations
  const proteinGrams = Math.round(weight * 1.25 + Math.min(20, sets * 0.5));
  const carbsGrams   = Math.round((targetIntakeKcal * 0.45) / 4);
  const fatsGrams    = Math.round((targetIntakeKcal * 0.25) / 9);
  const fiberGrams   = Math.min(40, Math.max(28, Math.round(weight * 0.45)));

  return {
    weight,
    sets,
    burnedKcal,
    waterLiters,
    totalWaterMl,
    bottleMl,
    targetContainers,
    containerLabel,
    proteinGrams,
    carbsGrams,
    fatsGrams,
    fiberGrams,
    bmr,
    tdee,
    targetIntakeKcal
  };
}

let activeDietMealType = "breakfast";

function getDietPlanForCurrentState(mealTypeOverride, dietPrefOverride) {
  const now = new Date();
  const h = now.getHours();
  let mealType = mealTypeOverride;

  if (!mealType || mealType === "water") {
    if (h >= 5 && h < 11) mealType = "breakfast";
    else if (h >= 11 && h < 16) mealType = "lunch";
    else mealType = "dinner";
  }

  activeDietMealType = mealType;

  // Real Day of Week calculation: Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5, Sun=6
  const dayOfWeek = now.getDay();
  const dayIdx = dayOfWeek === 0 ? 6 : (dayOfWeek - 1);

  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysHi = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
  const daysMr = ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरूवार", "शुक्रवार", "शनिवार"];

  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthsHi = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];

  const dateNum = now.getDate();
  const monthIdx = now.getMonth();
  const timeFmt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const dateStrEn = `${daysEn[dayOfWeek]}, ${dateNum} ${monthsEn[monthIdx]} · ${timeFmt}`;
  const dateStrHi = `${daysHi[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} · ${timeFmt}`;

  const dailyMenu = AYURVEDIC_DIET_PLAN_7DAYS[dayIdx];
  const dietPref = dietPrefOverride || (cfg.dietType === "nonveg" ? "nonveg" : "veg");
  const mealObj = dailyMenu[mealType][dietPref];
  const metrics = calcAyurvedicHydrationAndProtein();
  const name = cfg.userName || "Vaibhav";

  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  let speechText = mealObj.speech[lang] || mealObj.speech.hi;

  const dateTimeIntro = lang === "hi"
    ? `आज ${daysHi[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} को समय ${timeFmt}। `
    : lang === "mr"
    ? `आज ${daysMr[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} वेळ ${timeFmt}। `
    : `Today is ${daysEn[dayOfWeek]}, ${dateNum} ${monthsEn[monthIdx]} at ${timeFmt}. `;

  speechText = dateTimeIntro + speechText
    .replace(/{NAME}/g, name)
    .replace(/{SETS}/g, metrics.sets)
    .replace(/{WATER}/g, metrics.waterLiters)
    .replace(/{PROTEIN}/g, metrics.proteinGrams);

  return {
    mealType,
    dayName: dailyMenu.dayName,
    dateStr: lang === "hi" ? dateStrHi : dateStrEn,
    mealBadge: dailyMenu[mealType].mealBadge,
    dietPref,
    title: mealObj.title,
    body: mealObj.body,
    speechText,
    metrics,
    name
  };
}

function getWaterLoggedToday() {
  if (!data.waterLogs) data.waterLogs = {};
  const tk = todayKey();
  return data.waterLogs[tk] || 0;
}

function changeWaterBottleSize(newMl) {
  cfg.bottleMl = parseInt(newMl) || 1000;
  saveAll();
  const bsEl = document.getElementById("cfg-bottle-size"); if(bsEl) bsEl.value = cfg.bottleMl;
  const msEl = document.getElementById("modal-bottle-size"); if(msEl) msEl.value = cfg.bottleMl;
  updateWaterTrackerUI();
}
window.changeWaterBottleSize = changeWaterBottleSize;

function logWaterGlass() {
  const metrics = calcAyurvedicHydrationAndProtein();
  const tk = todayKey();
  if (!data.waterLogs) data.waterLogs = {};
  const currentLogged = data.waterLogs[tk] || 0;
  const target = metrics.targetContainers;
  const name = cfg.userName || "Vaibhav";
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  // If goal is ALREADY completed, notify user and prevent over-incrementing
  if (currentLogged >= target) {
    updateWaterTrackerUI();
    vib([40, 40]);
    if (!voiceMuted && window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
      qClear();
      try {
        const msg = lang === "hi"
          ? `बधाई हो ${name}! आपने आज का 100% जल लक्ष्य पहले ही पूरा कर लिया है! कल 12 बजे मध्यरात्रि के बाद अगला लक्ष्य शुरू होगा।`
          : `Congratulations ${name}! You have already completed 100% of your daily water goal for today. Next goal unlocks at 12 AM midnight!`;
        const u = new SpeechSynthesisUtterance(msg);
        u.rate = 0.95;
        u.lang = lang === "en" ? "en-IN" : "hi-IN";
        qSpeak(u);
      } catch (e) {}
    }
    return;
  }

  // Increment water log
  data.waterLogs[tk] = currentLogged + 1;
  saveAll();

  const logged = data.waterLogs[tk];
  const remaining = Math.max(0, target - logged);

  updateWaterTrackerUI();

  // Play appreciation & confirmation voice
  if (!voiceMuted && window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
    qClear();
    try {
      const unitStr = metrics.bottleMl >= 1000 ? `${metrics.bottleMl / 1000} Liter bottle` : `${metrics.bottleMl} milliliter glass`;
      const unitPlural = metrics.bottleMl >= 1000 ? "bottles" : "glasses";
      let speechMsg = "";

      if (logged >= target) {
        speechMsg = lang === "hi"
          ? `बधाई हो ${name}! आपने आज का 100% जल लक्ष्य ${metrics.waterLiters} लीटर (${target} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"}) पूरा कर लिया है! उत्कृष्ट कार्य!`
          : lang === "mr"
          ? `अभिनंदन ${name}! आपण आजचे १००% पाणी लक्ष्य ${metrics.waterLiters} लीटर पूर्ण केले आहे! खूप छान!`
          : `Congratulations ${name}! You have completed 100% of your daily ${metrics.waterLiters} Liters hydration goal with ${target} ${unitPlural}! Water button locked for today and will unlock at 12 AM midnight. Excellent work!`;
      } else {
        speechMsg = lang === "hi"
          ? `बहुत बढ़िया ${name}! 1 ${unitStr} दर्ज हुआ। आज ${logged} पूर्ण, ${remaining} ${unitPlural} बाकी हैं।`
          : lang === "mr"
          ? `छान ${name}! १ ${unitStr} नोंदवला. आज ${logged} पूर्ण, ${remaining} बाकी आहेत.`
          : `Great job ${name}! 1 ${unitStr} confirmed. You have completed ${logged} of ${target} target ${unitPlural} today, with ${remaining} ${unitPlural} remaining.`;
      }

      const u = new SpeechSynthesisUtterance(speechMsg);
      u.rate = 0.95;
      if (lang === "en") u.lang = "en-IN";
      else u.lang = "hi-IN";
      qSpeak(u);
    } catch (e) {}
  }
}

function quickLogWaterAndSpeak() {
  logWaterGlass();
}
window.quickLogWaterAndSpeak = quickLogWaterAndSpeak;

function updateWaterTrackerUI() {
  const metrics = calcAyurvedicHydrationAndProtein();
  const logged = getWaterLoggedToday();
  const target = metrics.targetContainers;
  const remaining = Math.max(0, target - logged);
  const pct = Math.min(100, Math.round((logged / target) * 100));
  const unitName = metrics.bottleMl >= 1000 ? "Bottles" : "Glasses";

  const ptEl = document.getElementById("water-progress-text");
  if (ptEl) {
    ptEl.textContent = `${logged} / ${target} ${unitName} (${remaining > 0 ? remaining + ' left' : 'Goal Reached!'})`;
  }

  const wgEl = document.getElementById("diet-water-glasses");
  if (wgEl) {
    wgEl.textContent = `(${target} ${unitName} of ${metrics.containerLabel})`;
  }

  const msEl = document.getElementById("modal-bottle-size");
  if (msEl && cfg.bottleMl) msEl.value = cfg.bottleMl;
  const bsEl = document.getElementById("cfg-bottle-size");
  if (bsEl && cfg.bottleMl) bsEl.value = cfg.bottleMl;

  const pbEl = document.getElementById("water-progress-bar");
  if (pbEl) pbEl.style.width = pct + "%";

  const gbEl = document.getElementById("water-goal-badge");
  if (gbEl) gbEl.style.display = logged >= target ? "block" : "none";

  // Sync main dashboard card widgets
  const cqsEl = document.getElementById("card-water-quick-status");
  if (cqsEl) {
    cqsEl.textContent = logged >= target
      ? `🎉 Goal Completed! ${logged} / ${target} ${unitName} (${metrics.waterLiters}L)`
      : `💧 ${logged} / ${target} ${unitName} (${metrics.waterLiters}L Goal)`;
  }
  const cpbEl = document.getElementById("card-water-progress-bar");
  if (cpbEl) {
    cpbEl.style.width = pct + "%";
  }

  // 🔒 Lock / Unlock +1 Drink Water buttons when today's goal is reached (Resets at 12 AM Midnight)
  const isGoalReached = logged >= target;

  const btnModalText = document.getElementById("log-water-btn-text");
  const btnModal = (btnModalText && typeof btnModalText.closest === "function") ? btnModalText.closest("button") : document.getElementById("log-water-btn");
  const btnQuick = document.getElementById("btn-quick-log-water");

  if (isGoalReached) {
    // Locked State (Goal Completed)
    if (btnModalText) btnModalText.textContent = `🎉 Water Goal Completed!`;
    if (btnModal) {
      btnModal.disabled = true;
      btnModal.style.opacity = "0.75";
      btnModal.style.cursor = "not-allowed";
      btnModal.style.background = "rgba(255,215,0,0.2)";
      btnModal.style.border = "1px solid #FFD700";
      btnModal.style.color = "#FFD700";
    }
    if (btnQuick) {
      btnQuick.innerHTML = `🎉 Goal Completed!`;
      btnQuick.disabled = true;
      btnQuick.style.opacity = "0.75";
      btnQuick.style.cursor = "not-allowed";
      btnQuick.style.background = "rgba(255,215,0,0.2)";
      btnQuick.style.border = "1px solid #FFD700";
      btnQuick.style.color = "#FFD700";
      btnQuick.style.boxShadow = "none";
    }
  } else {
    // Unlocked Active State (Goal Pending)
    if (btnModalText) btnModalText.textContent = `💧 +1 ${metrics.containerLabel} Confirmed`;
    if (btnModal) {
      btnModal.disabled = false;
      btnModal.style.opacity = "1";
      btnModal.style.cursor = "pointer";
      btnModal.style.background = "var(--acc)";
      btnModal.style.border = "none";
      btnModal.style.color = "#06231A";
    }
    if (btnQuick) {
      btnQuick.innerHTML = `💧 +1 Drink Water`;
      btnQuick.disabled = false;
      btnQuick.style.opacity = "1";
      btnQuick.style.cursor = "pointer";
      btnQuick.style.background = "var(--acc)";
      btnQuick.style.border = "none";
      btnQuick.style.color = "#06231A";
      btnQuick.style.boxShadow = "0 2px 8px rgba(29,184,127,0.3)";
    }
  }
}

let currentDietTabMode = "both";

function renderFullDayDietPlan() {
  const container = document.getElementById("diet-full-day-container");
  if (!container) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric", year: "numeric" });
  const dateHeaderEl = document.getElementById("diet-prep-date-header");
  if (dateHeaderEl) {
    dateHeaderEl.innerHTML = `📅 <strong>Date:</strong> ${dateStr} · Advance Prep Timetable`;
  }

  const dayOfWeek = now.getDay();
  const dayIdx = dayOfWeek === 0 ? 6 : (dayOfWeek - 1);
  const dailyMenu = AYURVEDIC_DIET_PLAN_7DAYS[dayIdx];

  const meals = [
    {
      key: "early_morning",
      timeSlot: "06:30 AM",
      badge: "Early Morning Prana Hydration",
      icon: "💧",
      prepNote: "⏰ <strong>Advance Prep:</strong> Soak 5 almonds & 1 tsp cumin seeds in water the night before at 9:00 PM.",
      veg: { title: "Jeera-Ajwain Warm Water & Soaked Almonds", body: "Warm water infused with cumin & ajwain. Eat 5 peeled soaked almonds for digestion & Agni activation." },
      nonveg: { title: "Jeera-Ajwain Warm Water & Soaked Almonds", body: "Warm water infused with cumin & ajwain. Eat 5 peeled soaked almonds for digestion & Agni activation." }
    },
    {
      key: "breakfast",
      timeSlot: "08:30 AM",
      badge: dailyMenu.breakfast.mealBadge,
      icon: "🥣",
      prepNote: "⏰ <strong>Advance Prep:</strong> Sprout moong beans 24 hrs prior. Chop veggies 15 min before breakfast.",
      veg: dailyMenu.breakfast.veg,
      nonveg: dailyMenu.breakfast.nonveg
    },
    {
      key: "mid_morning",
      timeSlot: "11:00 AM",
      badge: "Mid-Morning Vitality & Prana Refreshment",
      icon: "🍊",
      prepNote: "⏰ <strong>Advance Prep:</strong> Keep fresh tender coconut or papaya chilled in advance.",
      veg: { title: "Tender Coconut Water & Fresh Papaya", body: "1 Glass fresh coconut water / 1 bowl fresh papaya slices. Replenishes electrolytes & improves skin glow." },
      nonveg: { title: "Tender Coconut Water & Fresh Papaya", body: "1 Glass fresh coconut water / 1 bowl fresh papaya slices. Replenishes electrolytes & improves skin glow." }
    },
    {
      key: "lunch",
      timeSlot: "01:30 PM",
      badge: dailyMenu.lunch.mealBadge,
      icon: "🍲",
      prepNote: "⏰ <strong>Advance Prep:</strong> Cook dal & veggies 30 min before lunch. Prepare fresh curd.",
      veg: dailyMenu.lunch.veg,
      nonveg: dailyMenu.lunch.nonveg
    },
    {
      key: "evening",
      timeSlot: "05:00 PM",
      badge: "Evening Prana Refreshment & Seeds",
      icon: "☕",
      prepNote: "⏰ <strong>Advance Prep:</strong> Dry-roast makhana/pumpkin seeds in advance & store in airtight jar.",
      veg: { title: "Golden Turmeric Milk / Herbal Tea & Roasted Makhana", body: "Warm turmeric milk or herbal tea + 1 cup dry-roasted lotus seeds (makhana) or chia seeds." },
      nonveg: { title: "Golden Turmeric Milk / Herbal Tea & Roasted Makhana", body: "Warm turmeric milk or herbal tea + 1 cup dry-roasted lotus seeds (makhana) or chia seeds." }
    },
    {
      key: "dinner",
      timeSlot: "07:30 PM",
      badge: dailyMenu.dinner.mealBadge,
      icon: "🌙",
      prepNote: "⏰ <strong>Advance Prep:</strong> Prepare light soup by 7:00 PM for easy sleep digestion.",
      veg: dailyMenu.dinner.veg,
      nonveg: dailyMenu.dinner.nonveg
    }
  ];

  let html = "";
  meals.forEach(m => {
    html += `
      <div class="diet-meal-block" style="background:var(--surf);border:1px solid var(--bdr);border-radius:16px;padding:14px;box-shadow:0 4px 16px rgba(0,0,0,0.3)">
        <div style="font-size:12px;font-weight:900;color:var(--acc-lt);margin-bottom:6px;display:flex;align-items:center;justify-content:space-between">
          <span style="display:flex;align-items:center;gap:6px">${m.icon} <strong>${m.timeSlot}</strong> — ${m.badge}</span>
        </div>
        
        <div style="font-size:10px;color:var(--txt2);background:rgba(245,158,11,0.1);border-left:3px solid var(--acc);padding:5px 8px;border-radius:0 8px 8px 0;margin-bottom:8px">
          ${m.prepNote}
        </div>

        <!-- Veg Plan Item -->
        <div class="diet-subcard-veg" style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:10px;margin-bottom:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:12px;font-weight:900;color:var(--txt)">${m.veg.title}</span>
            <span style="font-size:9px;background:rgba(16,185,129,0.25);color:#34D399;padding:2px 6px;border-radius:6px;font-weight:800">🌱 VEG</span>
          </div>
          <div style="font-size:11px;color:var(--txt2);line-height:1.5">${m.veg.body}</div>
        </div>

        <!-- Non-Veg Plan Item -->
        <div class="diet-subcard-nonveg" style="background:rgba(255,159,67,0.08);border:1px solid rgba(255,159,67,0.3);border-radius:12px;padding:10px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:12px;font-weight:900;color:var(--txt)">${m.nonveg.title}</span>
            <span style="font-size:9px;background:rgba(255,159,67,0.25);color:#FF9F43;padding:2px 6px;border-radius:6px;font-weight:800">🍗 NON-VEG</span>
          </div>
          <div style="font-size:11px;color:var(--txt2);line-height:1.5">${m.nonveg.body}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  applyDietTabVisibility();
}

function switchDietTab(mode) {
  currentDietTabMode = mode;
  const btnBoth   = document.getElementById("diet-tab-both");
  const btnVeg    = document.getElementById("diet-tab-veg");
  const btnNonVeg = document.getElementById("diet-tab-nonveg");

  [btnBoth, btnVeg, btnNonVeg].forEach(b => {
    if (b) {
      b.style.background = "var(--surf2)";
      b.style.borderColor = "var(--bdr)";
      b.style.color = "var(--txt2)";
    }
  });

  if (mode === "veg") {
    if (btnVeg) { btnVeg.style.background = "var(--acc-dim)"; btnVeg.style.borderColor = "var(--acc)"; btnVeg.style.color = "var(--acc-lt)"; }
  } else if (mode === "nonveg") {
    if (btnNonVeg) { btnNonVeg.style.background = "var(--acc-dim)"; btnNonVeg.style.borderColor = "var(--acc)"; btnNonVeg.style.color = "var(--acc-lt)"; }
  } else {
    if (btnBoth) { btnBoth.style.background = "var(--acc-dim)"; btnBoth.style.borderColor = "var(--acc)"; btnBoth.style.color = "var(--acc-lt)"; }
  }
  applyDietTabVisibility();
}

function applyDietTabVisibility() {
  document.querySelectorAll(".diet-subcard-veg").forEach(el => {
    el.style.display = (currentDietTabMode === "nonveg") ? "none" : "block";
  });
  document.querySelectorAll(".diet-subcard-nonveg").forEach(el => {
    el.style.display = (currentDietTabMode === "veg") ? "none" : "block";
  });
}

function isDietReminderActiveToday() {
  const today = todayKey();
  // Auto-reset check: if turned OFF on a previous day, automatically restore to ON for today!
  if (data.dietOffDate && data.dietOffDate !== today) {
    delete data.dietOffDate;
    cfg.dietNotifOn = true;
    saveAll();
  }
  return cfg.dietNotifOn !== false;
}

function syncModalReminderToggles() {
  const active = isDietReminderActiveToday();
  togSet("tog-modal-diet-notif", active);
  togSet("tog-modal-water-notif", active);
  togSet("tog-modal-postgoal-notif", cfg.autoShowDietPostGoal !== false);
}

function toggleModalReminder(type) {
  const today = todayKey();
  if (type === "diet" || type === "water") {
    const activeNow = isDietReminderActiveToday();
    const nextState = !activeNow;
    cfg.dietNotifOn = nextState;
    if (!nextState) {
      data.dietOffDate = today; // Turning OFF applies ONLY for today!
    } else {
      delete data.dietOffDate;
    }
    togSet("tog-modal-diet-notif", nextState);
    togSet("tog-modal-water-notif", false);
  } else if (type === "water") {
    cfg.waterNotifOn = false;
    togSet("tog-modal-water-notif", false);
  } else if (type === "postgoal") {
    cfg.autoShowDietPostGoal = !togGet("tog-modal-postgoal-notif");
    togSet("tog-modal-postgoal-notif", cfg.autoShowDietPostGoal);
  }
  saveAll();
  scheduleAyurvedicDietNotifications();
  scheduleWaterIntakeReminders();
}

function switchDietTab(mode) {
  currentDietTabMode = mode;
  const btnBoth   = document.getElementById("diet-tab-both");
  const btnVeg    = document.getElementById("diet-tab-veg");
  const btnNonVeg = document.getElementById("diet-tab-nonveg");

  [btnBoth, btnVeg, btnNonVeg].forEach(b => {
    if (b) {
      b.style.background = "var(--surf2)";
      b.style.borderColor = "var(--bdr)";
      b.style.color = "var(--txt2)";
    }
  });

  if (mode === "veg") {
    if (btnVeg) { btnVeg.style.background = "var(--acc-dim)"; btnVeg.style.borderColor = "var(--acc)"; btnVeg.style.color = "var(--acc-lt)"; }
  } else if (mode === "nonveg") {
    if (btnNonVeg) { btnNonVeg.style.background = "var(--acc-dim)"; btnNonVeg.style.borderColor = "var(--acc)"; btnNonVeg.style.color = "var(--acc-lt)"; }
  } else {
    if (btnBoth) { btnBoth.style.background = "var(--acc-dim)"; btnBoth.style.borderColor = "var(--acc)"; btnBoth.style.color = "var(--acc-lt)"; }
  }
  applyDietTabVisibility();
  // Update voice speech to read active tab's meal plan
  speakCurrentDietNotification();
}

function speakWaterHydrationStatus() {
  if (voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") return;
  const metrics = calcAyurvedicHydrationAndProtein();
  const logged = getWaterLoggedToday();
  const target = metrics.targetContainers;
  const remaining = Math.max(0, target - logged);
  const name = cfg.userName || "Vaibhav";
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  qClear();
  try {
    const unitStr = metrics.bottleMl >= 1000 ? `${metrics.bottleMl / 1000} Liter bottles` : `${metrics.bottleMl} ml glasses`;
    let speechMsg = "";

    if (logged >= target) {
      speechMsg = lang === "hi"
        ? `नमस्ते ${name}! आपने आज का जल लक्ष्य ${metrics.waterLiters} लीटर (${target} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"}) 100% पूरा कर लिया है! बहुत बढ़िया!`
        : lang === "mr"
        ? `नमस्ते ${name}! आपण आजचे पाणी लक्ष्य ${metrics.waterLiters} लीटर पूर्ण केले आहे! खूप छान!`
        : `Namaste ${name}! You have completed 100% of your daily ${metrics.waterLiters} Liters hydration goal with ${target} ${unitStr}. Excellent job staying hydrated!`;
    } else {
      speechMsg = lang === "hi"
        ? `नमस्ते ${name}! आपका जल लक्ष्य ${metrics.waterLiters} लीटर है। अब तक ${logged} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"} दर्ज हुए हैं, और ${remaining} बाकी हैं। पानी पिएं और तरोताज़ा रहें!`
        : lang === "mr"
        ? `नमस्ते ${name}! तुमचे पाणी लक्ष्य ${metrics.waterLiters} लीटर आहे. आतापर्यंत ${logged} पूर्ण, ${remaining} बाकी आहेत.`
        : `Namaste ${name}! Your daily water target is ${metrics.waterLiters} Liters. You have logged ${logged} ${unitStr} today, with ${remaining} remaining. Remember to stay hydrated!`;
    }

    const u = new SpeechSynthesisUtterance(speechMsg);
    u.rate = 0.95;
    if (lang === "en") u.lang = "en-IN";
    else u.lang = "hi-IN";
    qSpeak(u);
  } catch (e) {}
}
window.speakWaterHydrationStatus = speakWaterHydrationStatus;

function showDietModal(mealTypeOverride, mode = "diet") {
  // If gita modal is open, close it cleanly
  const gitaModal = document.getElementById("gita-modal");
  if (gitaModal) {
    gitaModal.style.display = "none";
    gitaModal.classList.remove("show");
  }
  const pranaModal = document.getElementById("prana-guide-modal");
  if (pranaModal) {
    pranaModal.style.display = "none";
    pranaModal.classList.remove("show");
  }
  // If settings drawer is open, close it cleanly
  const dr = document.getElementById("dr");
  if (dr && dr.classList.contains("show")) {
    dr.classList.remove("show");
  }

  const activePref = (currentDietTabMode === "nonveg" || cfg.dietType === "nonveg") ? "nonveg" : "veg";
  const planObj = getDietPlanForCurrentState(mealTypeOverride, activePref);
  const metrics = calcAyurvedicHydrationAndProtein();

  const icEl = document.getElementById("diet-modal-icon");          if(icEl) icEl.textContent = planObj.mealType === "breakfast" ? "🥣" : (planObj.mealType === "lunch" ? "🍲" : "🌙");
  const grEl = document.getElementById("diet-user-greeting");       if(grEl) grEl.textContent = "Namaste " + planObj.name + "! 🙏 (" + planObj.dayName + ")";
  const wvEl = document.getElementById("diet-water-val");           if(wvEl) wvEl.textContent = metrics.waterLiters + " L";
  const wgEl = document.getElementById("diet-water-glasses");       if(wgEl) wgEl.textContent = "(" + metrics.glasses + " Glasses)";
  const pvEl = document.getElementById("diet-protein-val");         if(pvEl) pvEl.textContent = metrics.proteinGrams + "g";
  const cvEl = document.getElementById("diet-carbs-val");           if(cvEl) cvEl.textContent = metrics.carbsGrams + "g";
  const fvEl = document.getElementById("diet-fats-val");            if(fvEl) fvEl.textContent = metrics.fatsGrams + "g";
  const fbEl = document.getElementById("diet-fiber-val");           if(fbEl) fbEl.textContent = metrics.fiberGrams + "g";
  const scEl = document.getElementById("diet-sets-count");          if(scEl) scEl.textContent = "Based on " + metrics.weight + "kg & " + metrics.sets + " Sets";

  const bwEl = document.getElementById("diet-weight-val");          if(bwEl) bwEl.textContent = "Weight: " + metrics.weight + " kg";
  const dbEl = document.getElementById("diet-burned-val");          if(dbEl) dbEl.textContent = metrics.burnedKcal + " kcal";
  const dtEl = document.getElementById("diet-intake-target-val");   if(dtEl) dtEl.textContent = metrics.targetIntakeKcal.toLocaleString() + " kcal/day";

  renderFullDayDietPlan();
  updateWaterTrackerUI();
  syncModalReminderToggles();

  const modal = document.getElementById("diet-modal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  // AUTO-PLAY APPROPRIATE VOICE ON OPEN
  setTimeout(() => {
    if (mode === "water" || mealTypeOverride === "water") {
      speakWaterHydrationStatus();
    } else {
      speakCurrentDietNotification(planObj);
    }
  }, 400);
}

function closeDietModal() {
  const modal = document.getElementById("diet-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

window.showDietModal = showDietModal;
window.showdietmodal = showDietModal;
window.showDietmodal = showDietModal;
window.showdietPlan = showDietModal;
window.showDietPlan = showDietModal;
window.closeDietModal = closeDietModal;
window.switchDietTab = switchDietTab;
window.toggleModalReminder = toggleModalReminder;
window.logWaterGlass = logWaterGlass;

function speakCurrentDietNotification(planObj) {
  if (voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") return;
  const activePref = (currentDietTabMode === "nonveg" || cfg.dietType === "nonveg") ? "nonveg" : "veg";
  const plan = planObj || getDietPlanForCurrentState(activeDietMealType, activePref);
  
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  qClear();

  try {
    const u = new SpeechSynthesisUtterance(plan.speechText);
    if (lang === "en") {
      u.lang = "en-IN"; u.rate = 0.96;
    } else if (lang === "mr") {
      u.lang = "mr-IN"; u.rate = 0.92;
    } else {
      u.lang = "hi-IN"; u.rate = 0.92;
    }

    qSpeak(u);
  } catch (e) {
    console.warn("Speech synthesis error:", e);
  }
}

function triggerAyurvedicDietNotification(mealType) {
  if (!isDietReminderActiveToday()) return;
  const plan = getDietPlanForCurrentState(mealType);

  // 1. Show System Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification("🥗 Ayurvedic Diet & Hydration · " + plan.name, {
        body: plan.title + "\nWater Target: " + plan.metrics.waterLiters + "L | Protein: " + plan.metrics.proteinGrams + "g",
        icon: "./icon-192.png",
        badge: "./icon-192.png",
        tag: "surya-diet-notif",
        renotify: true,
        vibrate: [200, 100, 200]
      });
      n.onclick = () => {
        try { window.focus(); } catch (e) {}
        showDietModal(mealType);
        n.close();
      };
    } catch (e) { console.warn("Notification error:", e); }
  }

  // 2. If app is visible, pop diet modal and autoplay voice
  if (document.visibilityState === "visible") {
    showDietModal(mealType);
  }
}

let _dietNotifTimer = null;

function scheduleAyurvedicDietNotifications() {
  if (_dietNotifTimer) { clearInterval(_dietNotifTimer); _dietNotifTimer = null; }
  if (cfg.dietNotifOn === false) return;

  let lastTriggeredHour = -1;

  _dietNotifTimer = setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    if (h === lastTriggeredHour) return;

    if (h === 8 && m >= 0 && m <= 15) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("breakfast");
    } else if (h === 13 && m >= 0 && m <= 15) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("lunch");
    } else if (h === 19 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("dinner");
    }
  }, 60000);
}

let _waterNotifTimer = null;

function scheduleWaterIntakeReminders() {
  if (_waterNotifTimer) { clearInterval(_waterNotifTimer); _waterNotifTimer = null; }
  // Completely stopped water intake reminders as per user instruction
  return;
}

function triggerWaterHydrationNotification() {
  // Completely stopped water intake reminders as per user instruction
  return;
}

window.showDietModal = showDietModal;
window.closeDietModal = closeDietModal;
window.switchDietTab = switchDietTab;
window.logWaterGlass = logWaterGlass;
window.speakCurrentDietNotification = speakCurrentDietNotification;

// visibilitychange handled in unified handler below

// SW message listener (for future SW-based alarm)
navigator.serviceWorker && navigator.serviceWorker.addEventListener("message", e=>{
  if(e.data && e.data.type === "ALARM_FIRED") {
    const goal = todayGoal();
    speakText("Good morning! Today target is " + goal + " rounds. Om.");
  }
});



// ── UNIFIED visibilitychange — one handler, no duplicates ──────
document.addEventListener("visibilitychange", async () => {
  if(document.visibilityState !== "visible") return;
  // 1. Re-acquire wake lock if session active OR Pranayama is active/open
  const pranaOv = document.getElementById("prana-ov");
  const isPranaOpen = pranaState.active || (pranaOv && pranaOv.classList.contains("show"));
  if((sess.active && !sess.paused) || isPranaOpen) {
    await acquireWakeLock();
  }
  // 2. Check if goal needs rolling over (12 AM Midnight rule)
  checkMidnightRollover();
  // 3. Re-schedule 12 AM rollover timer
  scheduleMidnightRollover();
  // 4. Reschedule alarm timer
  if(cfg.alarmOn) scheduleAlarm();
  // 5. Greet if opened near alarm time
  checkMorningGreeting();
});


/* ── Data Recovery Scanner ─────────────────────────────────────
   Scans every possible localStorage key and shows what's found.
   Called from Settings "Scan & Recover" button.
/* ── Backup & Restore Engine ────────────────────────────────── */
function exportDataBackup() {
  try {
    const backupObj = {
      appName     : "SuryaNamaskara",
      version     : KEY,
      exportDate  : new Date().toISOString(),
      cfg         : cfg,
      data        : data
    };

    const jsonStr  = JSON.stringify(backupObj, null, 2);
    const blob     = new Blob([jsonStr], { type: "application/json" });
    const url      = URL.createObjectURL(blob);

    const today    = new Date().toISOString().slice(0, 10);
    const fileName = `SuryaNamaskara_Backup_${today}.json`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setStatus("Backup exported as " + fileName);
    vib(50);
  } catch(e) {
    alert("Export failed: " + e.message);
  }
}

function importDataBackup(file) {
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      const parsed  = JSON.parse(content);

      const importedData = parsed.data || (parsed.history ? parsed : null);
      const importedCfg  = parsed.cfg  || {};

      if(!importedData || (!importedData.history && importedData.totalAllTime === undefined)) {
        alert("Invalid backup file format! Please select a valid SuryaNamaskara JSON backup file.");
        return;
      }

      // Merge config
      if(importedCfg && typeof importedCfg === "object") {
        Object.assign(cfg, importedCfg);
      }

      // Merge history records — retain highest values
      const curHist = data.history || {};
      const srcHist = importedData.history || {};

      Object.keys(srcHist).forEach(date => {
        const srcRec = srcHist[date];
        const sets   = typeof srcRec === "number" ? srcRec : (srcRec.sets || 0);
        const timeMs = typeof srcRec === "object" ? (srcRec.timeMs || 0) : 0;
        const goal   = typeof srcRec === "object" ? (srcRec.goal || 0) : 0;
        const prana  = typeof srcRec === "object" ? (srcRec.pranaMs || 0) : 0;

        if(!curHist[date]) {
          curHist[date] = { sets, timeMs, goal, pranaMs: prana };
        } else {
          curHist[date].sets   = Math.max(curHist[date].sets || 0, sets);
          curHist[date].timeMs = Math.max(curHist[date].timeMs || 0, timeMs);
          curHist[date].goal   = Math.max(curHist[date].goal || 0, goal);
          if(prana) curHist[date].pranaMs = Math.max(curHist[date].pranaMs || 0, prana);
        }
      });

      data.history = curHist;

      // Update total counters (never decrease)
      if(importedData.totalAllTime !== undefined) {
        data.totalAllTime = Math.max(data.totalAllTime || 0, importedData.totalAllTime);
      }
      if(importedData.totalTimeMs !== undefined) {
        data.totalTimeMs = Math.max(data.totalTimeMs || 0, importedData.totalTimeMs);
      }
      if(importedData.totalPranaMs !== undefined) {
        data.totalPranaMs = Math.max(data.totalPranaMs || 0, importedData.totalPranaMs);
      }
      if(importedData.lastCompletedGoal) {
        data.lastCompletedGoal = Math.max(data.lastCompletedGoal || 0, importedData.lastCompletedGoal);
      }

      // Save merged state
      saveAll();

      // Update UI components
      render();
      renderBars();
      updatePranaTimeCards();

      const daysCount = Object.keys(data.history).length;
      alert("✅ Practice History Restored Successfully!\n\n" +
            "• Total Lifetime Sets: " + data.totalAllTime + "\n" +
            "• Total Days Recorded: " + daysCount + "\n" +
            "• Settings Restored!");
      vib([40, 40, 80]);
    } catch(err) {
      alert("Failed to restore backup file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function scanAndRecover() {
  const ALL_KEYS = [
    "surya-v36","surya-v35","surya-v34","surya-v33","surya-v32","surya-v31","surya-v30","surya-v29",
    "surya-v28","surya-v27","surya-v26","surya-v25","surya-v24","surya-v23",
    "surya-v22","surya-v21","surya-v20","surya-v19","surya-v18","surya-v17",
    "surya-v16","surya-v15","surya-v14","surya-v13","surya-v12","surya-v11",
    "surya-v10","surya-v9","surya-v8","surya-v7","surya-v6","surya-v5",
    "surya-v4","surya-v3","surya-v2","surya-v1","surya-namaskara-data-v1","surya-v0"
  ];

  const found = [];
  for(const k of ALL_KEYS) {
    const raw = localStorage.getItem(k);
    if(!raw) continue;
    try {
      const sv  = JSON.parse(raw);
      const d   = sv.data || sv;  // handle flat and nested formats
      const sets = d.totalAllTime || 0;
      const days = Object.keys(d.history || {}).length;
      const timeMs = d.totalTimeMs || 0;
      found.push({ key:k, sets, days, timeMs });
    } catch(e) { found.push({ key:k, sets:"?", days:"?", timeMs:0 }); }
  }

  if(found.length === 0) {
    alert("No saved data found in any version key.\nAll data appears to have been cleared.");
    return;
  }

  // Show found keys
  let msg = "Found data in " + found.length + " version key(s):\n\n";
  found.forEach(f => {
    const mins = Math.round(f.timeMs / 60000);
    msg += f.key + "\n  Sets: " + f.sets + " | Days: " + f.days + " | Time: " + mins + "min\n\n";
  });

  // Find best (most sets)
  const best = found.reduce((a,b) => (b.sets > a.sets ? b : a), found[0]);
  msg += "Best record: " + best.key + " (" + best.sets + " sets)\n\n";
  msg += "Tap OK to RESTORE from " + best.key + " and save as current version.";

  if(confirm(msg)) {
    try {
      const raw = localStorage.getItem(best.key);
      const sv  = JSON.parse(raw);
      const d   = sv.data || sv;
      const c   = sv.cfg  || {};

      // Load into current data
      Object.assign(cfg,  c);
      Object.assign(data, d);

      // Normalise history
      Object.keys(data.history).forEach(k => {
        const v = data.history[k];
        if(typeof v === "number") data.history[k] = {sets:v,timeMs:0,goal:0};
        if(!data.history[k].timeMs) data.history[k].timeMs = 0;
        if(!data.history[k].goal)   data.history[k].goal   = 0;
      });

      // Save under current key
      localStorage.setItem(KEY, JSON.stringify({cfg, data}));
      alert("Restored! Sets: " + data.totalAllTime + " | History days: " + Object.keys(data.history).length);
      location.reload();
    } catch(e) {
      alert("Restore failed: " + e.message);
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   IN-APP BILLING — Google Play / Digital Goods API
   Product IDs matching Google Play Console:
     surya.pass.1month  — One-Month Pass (non-renewing)
     surya.sub.6month   — 6-Month auto-renewing subscription
     surya.sub.12month  — 12-Month auto-renewing subscription
═══════════════════════════════════════════════════════════════ */
let selectedSku = "surya.sub.12month";

function selectSubTier(sku) {
  selectedSku = sku;
  ["1month", "3month", "6month", "12month"].forEach(t => {
    const el = document.getElementById("sub-card-" + t);
    if(el) {
      if(sku.includes(t)) {
        el.style.borderColor = "#FBBF24";
        el.style.borderWidth = "2.5px";
        el.style.background = "rgba(245,158,11,0.12)";
        el.style.boxShadow = "0 0 14px rgba(245,158,11,0.4)";
      } else {
        el.style.borderColor = "var(--bdr)";
        el.style.borderWidth = "1.5px";
        el.style.background = "var(--surf)";
        el.style.boxShadow = "none";
      }
    }
  });
}

function closePaywallOverlay() {
  const ov = document.getElementById("paywall-ov");
  if(ov) ov.classList.remove("show");
  checkAppLockState();
}

async function executePlayPurchase() {
  const btn = document.getElementById("pay-sub-btn");
  if(!btn) return;
  const origText = btn.innerHTML;
  btn.innerHTML = "⏳ Connecting to Google Play…";
  btn.disabled = true;

  try {
    const priceMap = {
      "surya.pass.1month": "99",
      "surya.sub.3month": "269",
      "surya.sub.6month": "479",
      "surya.sub.12month": "749"
    };
    const price = priceMap[selectedSku] || "749";

    // 1. Digital Goods API for Android TWA (Google Play Store App)
    if ("getDigitalGoodsService" in window) {
      try {
        const service = await window.getDigitalGoodsService("https://play.google.com/billing");
        const details = await service.getDetails([selectedSku]);

        const paymentMethods = [{
          supportedMethods: "https://play.google.com/billing",
          data: { sku: selectedSku }
        }];

        const request = new PaymentRequest(paymentMethods, {
          total: { label: "SuryaSarathi PRO Subscription", amount: { currency: "INR", value: price } }
        });

        const response = await request.show();
        await response.complete("success");

        grantPremiumAccess(selectedSku, response);
        closePaywallOverlay();
        alert("🎉 Welcome to SuryaSarathi PRO! Your Google Play subscription is active.");
        return;
      } catch (dgErr) {
        console.warn("Digital Goods API not active in this environment:", dgErr);
      }
    }

    // 2. Web Browser Preview / Staging Fallback (outside Play Store APK)
    grantPremiumAccess(selectedSku, null);
    closePaywallOverlay();
    alert("🎉 Welcome to SuryaSarathi PRO!\n\n(Note: Real Google Play Billing automatically triggers when users install your app from the Google Play Store).");

  } catch (err) {
    if (err.name !== "AbortError") {
      alert("Billing info: " + (err.message || "Purchase cancelled"));
    }
  } finally {
    btn.innerHTML = origText;
    btn.disabled = false;
  }
}

function showPaywallOverlay() {
  renderSubOverlayUI();
  const ov = document.getElementById("paywall-ov");
  if(ov) ov.classList.add("show");
}

function dismissBenefitsCard() {
  data.hideDay1Benefits = true;
  saveAll();
  render();
}

/* ── Free Trial & App Lock Engine ───────────────────────────── */
function getTrialInfo() {
  if (data.isPremium) {
    return { isTrial: false, isLocked: false, daysLeft: 0, daysElapsed: 0 };
  }

  if (!data.trialStartDate) {
    data.trialStartDate = new Date().toISOString();
    saveAll();
  }

  const start = new Date(data.trialStartDate);
  const end = new Date(start.getTime() + 7 * 86400000);
  const now = new Date();
  const diffMs = now - start;
  const daysElapsed = Math.floor(diffMs / 86400000);
  const daysLeft = Math.max(0, 7 - daysElapsed);
  const isLocked = daysLeft <= 0;

  const opt = { month: 'short', day: 'numeric', year: 'numeric' };
  return {
    isTrial: true,
    isLocked: isLocked,
    daysLeft: daysLeft,
    daysElapsed: daysElapsed,
    startDateStr: start.toLocaleDateString(undefined, opt),
    endDateStr: end.toLocaleDateString(undefined, opt)
  };
}

function checkAppLockState() {
  const trial = getTrialInfo();
  const sub = getSubscriptionInfo();

  if (data.isPremium && sub.active) {
    hideAppLock();
    return false;
  }

  if (trial.isLocked) {
    showAppLock();
    return true;
  }

  hideAppLock();
  return false;
}

function showAppLock() {
  const lockOv = document.getElementById("app-lock-ov");
  if(lockOv) lockOv.classList.add("show");
}

function hideAppLock() {
  const lockOv = document.getElementById("app-lock-ov");
  if(lockOv) lockOv.classList.remove("show");
}

/* ── Subscription Status & Marketing Reminders ───────────────── */
function getSubscriptionInfo() {
  if (!data.isPremium || !data.subDate) {
    return { active: false, daysLeft: 0, isExpired: false, isExpiringSoon: false };
  }
  const start = new Date(data.subDate);
  const sku = data.subSku || "surya.sub.6month";
  const is12m = sku.includes("12month");
  const is6m  = sku.includes("6month");
  const is1m  = sku.includes("pass.1month") || sku.includes("1month");

  const durationDays = is12m ? 365 : (is6m ? 180 : 30);
  // 1-Month Plan = One-Time Pass (No Auto-Renew)
  // 6-Month & 12-Month Plans = Auto-Renewing Subscriptions via Google Play Store
  const autoRenew = is6m || is12m;

  const end = new Date(start.getTime() + durationDays * 86400000);
  const now = new Date();
  const diffMs = end - now;
  const daysLeft = Math.max(0, Math.ceil(diffMs / 86400000));
  const active = diffMs > 0;

  const opt = { month: 'short', day: 'numeric', year: 'numeric' };
  return {
    active,
    sku,
    planName: is12m ? "12-Month Annual Pass" : (is6m ? "6-Month Subscription Plan" : "1-Month Pass"),
    startDateStr: start.toLocaleDateString(undefined, opt),
    endDateStr: end.toLocaleDateString(undefined, opt),
    daysLeft,
    autoRenew,
    isExpiringSoon: active && daysLeft <= 2,
    isExpired: !active
  };
}

function renderSubOverlayUI() {
  const sub = getSubscriptionInfo();
  const trial = getTrialInfo();
  const container = document.getElementById("sub-active-container");
  if(!container) return;

  if (sub.active) {
    const renewBadge = sub.autoRenew 
      ? '<span style="background:var(--acc-dim);color:var(--acc-lt);border:1px solid var(--acc);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">🔄 Auto-Renewing (Play Store)</span>'
      : '<span style="background:var(--surf2);color:var(--muted);border:1px solid var(--bdr);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">⏳ One-Time Pass (No Auto-Renew)</span>';

    const daysBadge = sub.isExpiringSoon
      ? `<div style="background:linear-gradient(135deg,#3A1000,#1A0000);border:1px solid var(--danger);color:var(--danger);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:8px;">⚠️ ${sub.daysLeft} Day${sub.daysLeft>1?'s':''} Remaining — Renew now to keep your streak!</div>`
      : `<div style="background:var(--acc-dim);border:1px solid var(--acc);color:var(--acc-lt);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:8px;">⏳ ${sub.daysLeft} Days Remaining</div>`;

    container.innerHTML = `
      <div style="background:linear-gradient(135deg,var(--surf2),var(--surf));border:1.5px solid var(--acc);border-radius:16px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:15px;font-weight:800;color:var(--acc);">${sub.planName}</div>
          ${renewBadge}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;font-size:11px;color:var(--txt2);">
          <div><strong style="color:var(--txt);">Started:</strong> ${sub.startDateStr}</div>
          <div><strong style="color:var(--txt);">${sub.autoRenew?'Renews:':'Expires:'}</strong> ${sub.endDateStr}</div>
        </div>
        ${daysBadge}
        <div style="margin-top:10px;display:flex;gap:8px;">
          ${sub.autoRenew ? `
          <button onclick="managePlayStoreSubscription()" 
                  style="flex:1;background:var(--surf2);border:1px solid var(--bdr);color:var(--txt);border-radius:9px;padding:7px;font-size:11px;font-weight:700;cursor:pointer;">
            ⚙️ Manage / Cancel in Play Store
          </button>` : ''}
        </div>
      </div>
    `;
  } else if (trial.isTrial && !trial.isLocked) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,rgba(29,184,127,0.15),rgba(255,215,0,0.12));border:1.5px solid var(--acc);border-radius:16px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:15px;font-weight:800;color:var(--acc);">🎁 7-Day Free Trial Active</div>
          <span style="background:var(--acc-dim);color:var(--acc-lt);border:1px solid var(--acc);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">Full Access</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;font-size:11px;color:var(--txt2);">
          <div><strong style="color:var(--txt);">Trial Start Date:</strong> ${trial.startDateStr}</div>
          <div><strong style="color:var(--txt);">Trial End Date:</strong> ${trial.endDateStr}</div>
        </div>
        <div style="background:var(--acc-dim);border:1px solid var(--acc);color:var(--acc-lt);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:10px;text-align:center;">
          ⏳ ${trial.daysLeft} Day${trial.daysLeft>1?'s':''} Remaining — Practice Unlocked Until ${trial.endDateStr}
        </div>
      </div>
    `;
  } else if (sub.isExpired) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:16px;padding:14px;margin-bottom:14px;text-align:center;">
        <div style="font-size:15px;font-weight:800;color:var(--danger);">⚠️ Subscription Expired</div>
        <div style="font-size:12px;color:var(--txt2);margin-top:4px;">Your PRO plan expired on ${sub.endDateStr}. Renew today to continue your 108 Surya Namaskara streak!</div>
      </div>
    `;
  } else {
    container.innerHTML = "";
  }
}

function checkSubscriptionReminder() {
  const sub = getSubscriptionInfo();
  const trial = getTrialInfo();
  const banner = document.getElementById("sub-reminder-banner");
  if(!banner) return;

  // 1. Paid Subscription Expiring Soon (<= 2 days)
  if (sub.active && sub.isExpiringSoon) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">⏳ PRO Plan Expiring in ${sub.daysLeft} Day${sub.daysLeft>1?'s':''}!</div>
          <div style="font-size:10px;color:var(--txt2)">Renew now to keep your 108 Surya Namaskara streak unbroken.</div>
        </div>
        <div style="background:var(--danger);color:#fff;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Renew</div>
      </div>
    `;
    return;
  }

  // 2. Paid Subscription Expired
  if (sub.isExpired && data.subDate) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">⚠️ Subscription Expired (${sub.endDateStr})</div>
          <div style="font-size:10px;color:var(--txt2)">Re-activate PRO to unlock full voice guidance &amp; pranayama.</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Re-activate</div>
      </div>
    `;
    return;
  }

  // 3. Free Trial Expired (Lock active)
  if (trial.isLocked) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">🔒 7-Day Free Trial Expired!</div>
          <div style="font-size:10px;color:var(--txt2)">Select a PRO Plan to unlock your daily 108 Surya Namaskara practice.</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Unlock</div>
      </div>
    `;
    return;
  }

  // 4. Free Trial Active
  if (trial.isTrial && !trial.isLocked) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,rgba(255,215,0,0.15),rgba(29,184,127,0.15));border:1.5px solid var(--acc);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--acc-lt)">🎁 7-Day Free Trial Active (${trial.daysLeft} Day${trial.daysLeft>1?'s':''} Left)</div>
          <div style="font-size:10px;color:var(--txt2)">Start: ${trial.startDateStr} · End: ${trial.endDateStr} · Full Access Unlocked</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">View Plans</div>
      </div>
    `;
    return;
  }

  banner.style.display = "none";
}

function managePlayStoreSubscription() {
  if(confirm("Opening Google Play Store Subscriptions...\n\nYou can view, manage, or cancel auto-renewal anytime in Google Play Store.")) {
    window.open("https://play.google.com/store/account/subscriptions", "_blank");
  }
}

function grantPremiumAccess(sku, response) {
  data.isPremium = true;
  data.subSku    = sku;
  data.subDate   = new Date().toISOString();
  saveAll();
  hideAppLock();
  render();
}

/* ═══════════════════════════════════════════════════════════════
   CLASSICAL YOGA & AYURVEDIC PRANAYAMA STANDARDS
   Based on Hatha Yoga Pradipika, Gheranda Samhita, & Shiva Samhita
═══════════════════════════════════════════════════════════════ */
const CLASSICAL_YOGA_AYURVEDA_STANDARDS = {
  dirgha: {
    title: "Dirgha Pranayama (Three-Part Deep Breathing)",
    classicalText: "Patanjali Yoga Sutras (2.49-51) & Gheranda Samhita (5.46-52)",
    method: "Sit comfortably with an erect spine. Inhale sequentially in three distinct stages: first fill the lower abdomen (belly), second expand the intercostal ribs, third lift the upper chest and collarbones. Exhale in exact reverse order: upper chest falls, ribs contract, belly draws inward toward the spine.",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale, 4s Exhale — Equal Sama Vritti)",
      intermediate: "1 : 0 : 2 (4s Inhale, 8s Exhale — Extended Visama Vritti)",
      advanced: "1 : 1 : 2 (4s Inhale, 4s Antar Kumbhaka retention, 8s Exhale)"
    },
    roundsDuration: "6 – 10 rounds (2.5 – 5.0 minutes daily)",
    postureMudraEye: "Padmasana (Lotus Pose), Siddhasana, or Sukhasana. Hands in Chin Mudra (thumb & index tip joining, palms up on knees). Eyes softly closed with internal awareness at Manipuraka (Navel) & Anahata (Heart) Chakras.",
    timeFasting: "Best practiced during Brahma Muhurta (4:00 AM – 6:00 AM) or Sunset (Sandhya). Strictly on an empty stomach (minimum 3–4 hours after meals).",
    physicalBenefits: "Increases vital lung capacity by up to 30%, mobilizes the diaphragm, strengthens intercostal muscles, optimizes arterial blood oxygenation, and aids venous blood return.",
    mentalBenefits: "Activates the Parasympathetic Nervous System via Vagus nerve stimulation. Reduces cortisol, calms hyper-arousal, alleviates panic and anxiety, and brings immediate mental clarity.",
    ayurvedicBenefits: {
      vata: "Strongly pacifies Vata (Samana Vayu & Vyana Vayu) — grounds nervous energy.",
      pitta: "Cools excess Sadhaka Pitta — reduces anger and emotional heat.",
      kapha: "Expands chest region to prevent stagnant Kledaka Kapha accumulation.",
      agni: "Balances Jatharagni (digestive fire) without creating harsh heat.",
      prana: "Harmonizes Prana Vayu (chest intake) and Apana Vayu (elimination)."
    },
    chakraNadi: "Harmonizes Manipuraka (Solar Plexus) & Anahata (Heart) Chakras. Equalizes energy flow between Ida (Moon/Left) and Pingala (Sun/Right) Nadis.",
    precautions: "Avoid forcing or straining the breath. Keep shoulders relaxed; do not hunch shoulders upward during inhalation. Caution during acute respiratory asthma flare-ups.",
    progression: "Stage 1: Equal 4:4 breath (1 week) → Stage 2: Extended 4:8 exhale (2 weeks) → Stage 3: 4:4:8 ratio with gentle internal retention (Antar Kumbhaka)."
  },

  kapalabhati: {
    title: "Kapalabhati (Skull-Shining Purification / Shatkarma)",
    classicalText: "Hatha Yoga Pradipika (2.35–37) & Gheranda Samhita (1.55–58)",
    method: "Sit tall with erect spine. Inhalation is passive, natural, and quiet. Exhalation is rapid, active, sharp, and forceful through both nostrils by contracting the lower abdominal muscles and snapping the navel inward toward the spine.",
    ratios: {
      beginner: "30 strokes per round at 1 stroke/sec (No retention)",
      intermediate: "36–60 strokes per round at 1.2 strokes/sec followed by 10s Antar Kumbhaka",
      advanced: "120 strokes per round followed by 30s Antar Kumbhaka with Jalandhara & Mula Bandhas"
    },
    roundsDuration: "3 – 5 rounds (36 strokes/round, total 4.5 minutes)",
    postureMudraEye: "Siddhasana or Padmasana. Hands in Chin Mudra or Adi Mudra. Eyes closed with gaze turned inward at Bhrumadhya (Eyebrow Center — Ajna Chakra).",
    timeFasting: "Early morning during Brahma Muhurta. Strictly on a completely empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Clears frontal cranial sinuses (*Kapala*), expels stale residual air and excess carbon dioxide, tones abdominal rectus muscles, and stimulates pancreatic secretion.",
    mentalBenefits: "Dispels mental lethargy (*Tamas*), sharpens cognitive alertness, enhances focus, and induces a feeling of lightness and clarity in the skull.",
    ayurvedicBenefits: {
      vata: "Stimulates Samana Vayu; exercise moderation to avoid over-activating Vyana Vayu.",
      pitta: "Increases internal body heat (Pitta) — practice gently in hot summer climates.",
      kapha: "Strongly destroys excess Kapha (*Kapha Nashak*) and clears mucosal stagnation.",
      agni: "Kindles intense Jatharagni (digestive fire) & Bhutagni (liver metabolic fire).",
      prana: "Awakens Udana Vayu (upward energy) & Prana Vayu."
    },
    chakraNadi: "Purifies all 72,000 Nadis as described in Hatha Yoga Pradipika. Strongly stimulates Manipuraka (Solar Plexus) & Ajna (Third Eye) Chakras.",
    precautions: "STRICT CONTRAINDICATIONS: High Blood Pressure, Heart Conditions, Hernia, Epilepsy, Glaucoma, Pregnancy, Recent Abdominal Surgery. Mistake: Hunching shoulders or facial grimacing during strokes.",
    progression: "Stage 1: 20 strokes @ 1 stroke/sec → Stage 2: 36–60 strokes with 12s Kumbhaka → Stage 3: 120 strokes with Jalandhara and Mula Bandhas."
  },

  bhastrika: {
    title: "Bhastrika (Bellows Breath)",
    classicalText: "Hatha Yoga Pradipika (2.59–67) & Gheranda Samhita (5.75–77)",
    method: "Mimic the action of a blacksmith's bellows. Inhale forcefully AND exhale forcefully through both nostrils with equal force and speed, expanding and contracting the abdomen. Conclude round with a deep inhalation, hold (Kumbhaka), and slow exhalation.",
    ratios: {
      beginner: "15 rapid equal breaths followed by 1 : 0 : 1 deep breath",
      intermediate: "24 rapid breaths followed by 1 : 4 : 2 retention (4s in, 16s hold, 8s out)",
      advanced: "50–100 rapid breaths followed by 1 : 4 : 2 : 1 Kumbhaka with Mahabandha (Mula + Uddiyana + Jalandhara)"
    },
    roundsDuration: "3 – 4 rounds (24 breaths/round, total 3.0 minutes)",
    postureMudraEye: "Padmasana, Vajrasana, or Siddhasana. Hands in Jnana Mudra or loose fists at shoulder height. Eyes closed, internal awareness at Anahata (Heart) & Ajna Chakras.",
    timeFasting: "Early morning at sunrise or cold weather. Strictly empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Heats the entire body, purifies bronchial airways, strengthens diaphragm and intercostals, boosts immune response, and accelerates cellular oxygen intake.",
    mentalBenefits: "Removes Tamasic inertia and Rajasic agitation, bringing the mind into Sattvic tranquility, resilience, and vitality.",
    ayurvedicBenefits: {
      vata: "Balances Vata when practiced with proper internal retention.",
      pitta: "Increases Pitta heat; balances Tridosha according to Hatha Yoga Pradipika 2.65.",
      kapha: "Rapidly liquefies and expels thick Kapha phlegm.",
      agni: "Maximizes Jatharagni and Dhatu Agni (tissue metabolism).",
      prana: "Forces Prana into Sushumna Nadi, piercing the 3 Granthis."
    },
    chakraNadi: "Pierces Brahma Granthi (Root), Vishnu Granthi (Heart), & Rudra Granthi (Head). Directs Prana into central Sushumna Nadi.",
    precautions: "CONTRAINDICATED in Severe Hypertension, Vertigo, Heart conditions, Gastric Ulcers, Pregnancy, Ear Infection. Mistake: Excessive throat friction or hyperventilation without control.",
    progression: "Stage 1: 12 slow bellows breaths → Stage 2: 24 breaths with 15s hold → Stage 3: 50 breaths with Mahabandha."
  },

  anulom: {
    title: "Anulom Vilom (Alternate Nostril Balance)",
    classicalText: "Yoga Yajnavalkya (6.1–25) & Shiva Samhita (3.22–30)",
    method: "Raise right hand in Nasagra / Vishnu Mudra. Close right nostril with thumb, inhale smoothly through left nostril. Close left nostril with ring finger, release right nostril and exhale smoothly. Inhale through right nostril, close right, exhale through left. Maintain continuous rhythm without breath retention.",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale Left, 4s Exhale Right, 4s Inhale Right, 4s Exhale Left)",
      intermediate: "1 : 0 : 2 (4s Inhale, 8s Exhale — Extended Exhalation)",
      advanced: "1 : 0 : 2 (5s Inhale, 10s Exhale — Deep Slow Flow)"
    },
    roundsDuration: "10 – 15 rounds (6.0 minutes daily)",
    postureMudraEye: "Padmasana or Siddhasana. Right hand in Nasagra / Vishnu Mudra, Left hand in Chin Mudra on left knee. Eyes closed, awareness at Bhrumadhya (Ajna Chakra).",
    timeFasting: "Any time of day (ideal at dawn, noon, sunset). Empty stomach or minimum 2 hours after a light meal.",
    physicalBenefits: "Synchronizes left and right brain hemisphere activity, balances sympathetic and parasympathetic nervous systems, and improves cardiovascular rhythm.",
    mentalBenefits: "Alleviates anxiety, stress, emotional mood swings, and insomnia. Restores mental focus, patience, and inner equilibrium.",
    ayurvedicBenefits: {
      vata: "Pacifies Prana Vayu and Vyana Vayu — excellent for Vata disorders.",
      pitta: "Cools excess Pitta and reduces vascular heat.",
      kapha: "Regulates Kapha flow throughout the upper respiratory channels.",
      agni: "Balances Samana Agni in the solar plexus.",
      prana: "Equalizes Ida (Moon/Left/Cooling) & Pingala (Sun/Right/Heating) Nadis."
    },
    chakraNadi: "Purifies Ida & Pingala Nadis, establishing balance across Ajna (Third Eye) Chakra.",
    precautions: "Avoid pressing nostrils too hard. Do not rush or force the airflow; breathing should be silent, smooth, and un-jerky.",
    progression: "Stage 1: Equal 4:4 ratio → Stage 2: 4:8 ratio → Stage 3: Transition to Nadi Shodhana with Antar Kumbhaka."
  },

  nadi: {
    title: "Nadi Shodhana (Channel Purification 1:4:2 Ratio)",
    classicalText: "Hatha Yoga Pradipika (2.7–10) & Gheranda Samhita (5.38–45)",
    method: "Classical alternate nostril breathing with internal breath retention (Antar Kumbhaka). Inhale left nostril (4s), retain breath with both nostrils closed (16s), exhale right nostril (8s). Inhale right (4s), retain (16s), exhale left (8s).",
    ratios: {
      beginner: "1 : 2 : 2 (4s Inhale, 8s Hold, 8s Exhale)",
      intermediate: "1 : 4 : 2 (4s Inhale, 16s Antar Kumbhaka, 8s Exhale)",
      advanced: "1 : 4 : 2 : 1 (4s Inhale, 16s Antar Kumbhaka, 8s Exhale, 4s Bahya Kumbhaka with Jalandhara & Mula Bandhas)"
    },
    roundsDuration: "5 – 10 rounds (5.0 minutes daily)",
    postureMudraEye: "Siddhasana or Padmasana. Right hand in Vishnu Mudra, Left hand in Chin Mudra. Eyes closed, awareness focused on Sushumna Nadi & Ajna Chakra.",
    timeFasting: "Dawn (Brahma Muhurta) & Sunset. Strictly on an empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Maximizes arterial oxygen saturation, enhances Heart Rate Variability (HRV), purifies respiratory pathways, and optimizes cellular metabolism.",
    mentalBenefits: "Induces profound meditative quietude, clears subconscious impressions (*Samskaras*), and enhances deep cognitive intelligence.",
    ayurvedicBenefits: {
      vata: "Perfectly balances Vata (*Tridosha Samata*) as detailed in Gheranda Samhita 5.38.",
      pitta: "Purifies Sadhaka & Ranjaka Pitta.",
      kapha: "Clears Kledaka Kapha from subtle energy pathways.",
      agni: "Establishes Samagni (perfect balanced metabolic fire).",
      prana: "Directs Prana into central Sushumna Nadi."
    },
    chakraNadi: "Completely purifies all 72,000 Nadis (*Nadi Shuddhi*), unlocks Sushumna Nadi, and prepares for Kundalini awakening.",
    precautions: "Never force breath retention (Kumbhaka). If feeling dizzy or breathless, immediately drop retention and return to equal breathing. Contraindicated in unmanaged severe hypertension.",
    progression: "Stage 1: 4:8:8 ratio → Stage 2: Classical 4:16:8 ratio → Stage 3: 4:16:8:4 ratio with Jalandhara, Uddiyana, & Mula Bandhas (Maha Bandha)."
  },

  ujjayi: {
    title: "Ujjayi Pranayama (Ocean / Psychic Breath)",
    classicalText: "Hatha Yoga Pradipika (2.51–53) & Gheranda Samhita (5.69–72)",
    method: "Slightly contract the glottis in the throat. Inhale and exhale through the nose, creating a soft, soothing, continuous ocean-wave or soft whispering sound in the throat (*Ajapa Japa*).",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale with throat sound, 4s Exhale with throat sound)",
      intermediate: "1 : 0 : 2 (5s Inhale, 10s Exhale)",
      advanced: "1 : 4 : 2 (5s Inhale, 20s Antar Kumbhaka with Jalandhara Bandha, 10s Exhale)"
    },
    roundsDuration: "6 – 12 rounds (1.5 – 3.0 minutes)",
    postureMudraEye: "Any comfortable meditative pose or during Asana practice. Chin Mudra or Khechari Mudra (tongue tip folded back against soft palate). Eyes closed, awareness at Vishuddhi (Throat) Chakra.",
    timeFasting: "Any time of day. Safe on light stomach or empty stomach.",
    physicalBenefits: "Lowers arterial blood pressure, regulates thyroid & parathyroid endocrine secretions, warms incoming air, and relieves bronchitis and asthma.",
    mentalBenefits: "Relieves insomnia, nervous tension, and mental anxiety. Highly effective before sleep to quiet racing thoughts.",
    ayurvedicBenefits: {
      vata: "Calms Udana Vayu (throat & speech energy) and Vyana Vayu.",
      pitta: "Cools internal heat when practiced without retention.",
      kapha: "Removes excess Kapha phlegm from throat and lungs (*Hatha Yoga Pradipika 2.53*).",
      agni: "Stabilizes Vishama Agni.",
      prana: "Harmonizes Prana Vayu at the throat center."
    },
    chakraNadi: "Activates Vishuddhi (Throat) Chakra & Bindu Visarga; balances Ida & Pingala Nadis.",
    precautions: "Do not over-constrict the throat causing harsh friction. Avoid strain if suffering from severe low blood pressure.",
    progression: "Stage 1: Equal 4:4 ocean breath → Stage 2: Extended 5:10 exhale → Stage 3: Khechari Mudra + Jalandhara Bandha internal retention."
  },

  bhramari: {
    title: "Bhramari (Humming Bee Breath)",
    classicalText: "Hatha Yoga Pradipika (2.68) & Gheranda Samhita (5.78–82)",
    method: "Inhale deeply through both nostrils. On exhalation, produce a smooth, continuous, low-pitched humming sound (*Mmmmm*) like a black bee. Apply Shanmukhi Mudra to close external senses.",
    ratios: {
      beginner: "1 : 0 : 2 (4s Inhale, 8s–10s Humming Exhale)",
      intermediate: "1 : 0 : 3 (5s Inhale, 15s Humming Exhale)",
      advanced: "1 : 2 : 3 (5s Inhale, 10s Antar Kumbhaka, 15s–20s Humming Exhale with Jalandhara Bandha)"
    },
    roundsDuration: "10 – 15 rounds (3.5 – 5.0 minutes)",
    postureMudraEye: "Padmasana or Sukhasana. Shanmukhi Mudra (thumbs close ears, index fingers on eyelids, middle fingers on nostril sides, ring & little fingers above & below lips). Eyes closed, internal vibration focus.",
    timeFasting: "Night before bedtime or Early Morning. Best on empty stomach.",
    physicalBenefits: "Increases Nitric Oxide (NO) production in nasal airways 15-fold, dilating blood vessels, reducing blood pressure, and boosting mucosal immunity.",
    mentalBenefits: "Provides immediate neural relaxation, alleviates anger, frustration, and insomnia, and induces deep Sattvic stillness.",
    ayurvedicBenefits: {
      vata: "Exceptionally pacifies Vata (Prana Vayu & Tarpaka Kapha) — premier anti-anxiety practice.",
      pitta: "Cools Sadhaka Pitta, reducing mental anger and heat.",
      kapha: "Soothes Kledaka Kapha.",
      agni: "Harmonizes Pranic Agni.",
      prana: "Directs Prana into the brain and cranial nerves."
    },
    chakraNadi: "Resonates Ajna (Third Eye) & Sahasrara (Crown) Chakras. Awakens internal subtle sound (*Nada Anusandhana*).",
    precautions: "Do not press hard on eyeballs in Shanmukhi Mudra. Contraindicated in severe active ear infections.",
    progression: "Stage 1: Simple humming exhale → Stage 2: Shanmukhi Mudra → Stage 3: Antar Kumbhaka + Nada Anusandhana meditation."
  },

  meditation: {
    title: "Dhyana Meditation (Silent Awareness)",
    classicalText: "Patanjali Yoga Sutras (3.2) & Shiva Samhita (5.160–185)",
    method: "Maintain absolute stillness of body, breath, and mind. Observe the natural, un-forced breath as a silent witness (*Sakshi Bhava*), allowing pure awareness to rest in non-dual consciousness.",
    ratios: {
      beginner: "Natural un-controlled breath flow (100% effortless awareness)",
      intermediate: "Natural breath observation with subtle So-Ham mantra resonance",
      advanced: "Nirguna Dhyana — pure objectless absorption (*Samadhi*)"
    },
    roundsDuration: "1 continuous session (9.0 – 15.0 minutes)",
    postureMudraEye: "Padmasana, Siddhasana, or Sukhasana with spine 100% erect. Dhyana Mudra (right palm resting over left palm in lap). Eyes softly closed, awareness at Ajna (Eyebrow Center) or Anahata (Heart Center).",
    timeFasting: "Dawn (Brahma Muhurta) / Night before sleep. Empty stomach preferred.",
    physicalBenefits: "Triggers maximum physiological recovery, normalizes cortisol & stress hormones, stabilizes EEG brainwave states (Alpha & Theta), and accelerates cellular repair.",
    mentalBenefits: "Dissolves mental duality, cultivates unwavering concentration (*Ekagrata*), inner serenity, and unconditioned bliss (*Ananda*).",
    ayurvedicBenefits: {
      vata: "Rebuilds Ojas (vital essence), Tejas (radiance), & Prana.",
      pitta: "Pacifies Sadhaka Pitta.",
      kapha: "Harmonizes Tarpaka Kapha.",
      agni: "Achieves Samagni (perfect metabolic equilibrium).",
      prana: "Merges Prana into Sushumna Nadi."
    },
    chakraNadi: "Harmonizes all 7 Chakras; merges Prana into Sushumna Nadi leading toward Samadhi.",
    precautions: "Avoid slouching the spine or falling into dull sleep (*Laya*). Maintain an alert yet completely relaxed witness attitude.",
    progression: "Stage 1: Breath awareness (Anapanasati) → Stage 2: Mantra Japa → Stage 3: Pure Nirguna Meditation (Silent Witness)."
  }
};

/* ── Diet & Hydration Plan Completion Locking System ────────── */
function isDietPlanUnlocked() {
  const done = todayDone(), goal = todayGoal();
  const isGoalComplete = done >= goal && goal > 0;
  const isPranaFinished = !!(data.pranaFinishedToday || pranaState.completedToday);
  const isPranaClosed = !!data.pranaClosedToday;

  if (isGoalComplete && isPranaFinished) return true;
  if (isPranaClosed) return true;

  return false;
}

function updateDietPlanButtonLockUI() {
  const card = document.getElementById("card-view-diet-plan");
  const infoHeader = document.getElementById("diet-card-info-header");
  const pbarWrap = document.getElementById("diet-card-pbar-wrap");
  const waterBtnRow = document.getElementById("diet-card-water-btn-row");
  const waterBtn = document.getElementById("btn-quick-log-water");
  const btn = document.getElementById("btn-view-diet-plan");
  const unlocked = isDietPlanUnlocked();

  if (card) card.style.display = "block";

  if (unlocked) {
    // Goal Complete -> Show full Ayurvedic Diet & Hydration window card with title, progress bar, & View Plan button!
    if (infoHeader) infoHeader.style.display = "flex";
    if (pbarWrap) pbarWrap.style.display = "block";
    if (waterBtnRow) {
      waterBtnRow.style.display = "flex";
      waterBtnRow.style.justify = "flex-end";
      waterBtnRow.style.width = "auto";
    }
    if (waterBtn) {
      waterBtn.style.width = "auto";
      waterBtn.style.padding = "6px 12px";
      waterBtn.style.fontSize = "11px";
    }
    if (card) {
      card.style.background = "linear-gradient(135deg,rgba(245,158,11,0.15),rgba(56,189,248,0.12))";
      card.style.border = "1.2px solid var(--bdr)";
      card.style.padding = "10px 12px";
      card.style.cursor = "pointer";
    }
    if (btn) {
      btn.textContent = "View Plan";
      btn.style.background = "rgba(16, 185, 129, 0.18)";
      btn.style.borderColor = "#10B981";
      btn.style.color = "#34D399";
      btn.style.cursor = "pointer";
    }
  } else {
    // Before Goal Complete -> HIDE diet details, title, subtitle, progress bar, & View Plan button! ONLY show +1 Drink Water button!
    if (infoHeader) infoHeader.style.display = "none";
    if (pbarWrap) pbarWrap.style.display = "none";
    if (waterBtnRow) {
      waterBtnRow.style.display = "flex";
      waterBtnRow.style.justify = "center";
      waterBtnRow.style.width = "100%";
    }
    if (waterBtn) {
      waterBtn.style.width = "100%";
      waterBtn.style.justifyContent = "center";
      waterBtn.style.padding = "10px 16px";
      waterBtn.style.fontSize = "13px";
    }
    if (card) {
      card.style.background = "transparent";
      card.style.border = "none";
      card.style.padding = "0px";
      card.style.cursor = "default";
    }
  }
}

function handleDietPlanClick(e) {
  if (e) e.stopPropagation();

  if (!isDietPlanUnlocked()) {
    vib(30);
    const lang = cfg.pranaLang || "en";
    const msg = lang === "hi"
      ? "🔒 आज का आयुर्वेदिक आहार और जल योजना सूर्य नमस्कार लक्ष्य और प्राणायाम पूरा करने (या बंद करने पर) अनलॉक होगी!"
      : lang === "mr"
      ? "🔒 आजची आयुर्वेदिक आहार आणि पाणी योजना सूर्य नमस्कार ध्येय आणि प्राणायाम पूर्ण झाल्यावर (किंवा बंद केल्यावर) अनलॉक होईल!"
      : "🔒 Today's Ayurvedic Diet & Hydration Plan unlocks after completing today's Surya Namaskara target & Pranayama routine (or closing Pranayama)!";
    alert(msg);
    return;
  }

  showDietModal();
}
window.handleDietPlanClick = handleDietPlanClick;
window.isDietPlanUnlocked = isDietPlanUnlocked;

let _pranaPausedForGuide = false;

function pausePranaForGuideSpeech() {
  if (pranaState.active && !pranaState.paused) {
    _pranaPausedForGuide = true;
    clearPranaTimers();
    const badgeEl = document.getElementById("prana-live-badge");
    if (badgeEl) badgeEl.innerHTML = "📖 Guide Speaking — Round Paused";
  }
}

function resumePranaFromGuideSpeech() {
  if (_pranaPausedForGuide) {
    _pranaPausedForGuide = false;
    if (pranaState.active && !pranaState.paused) {
      startPranaStep();
      startPranaClocks();
    }
  }
}

let _guideSpeechActive = false;

function updatePranaGuideLockButton(isLocked) {
  const btn = document.getElementById("btn-prana-guide");
  const lockIcon = document.getElementById("prana-guide-lock-icon");
  if (btn) {
    btn.disabled = isLocked;
    btn.style.opacity = isLocked ? "0.5" : "1";
    btn.style.cursor = isLocked ? "not-allowed" : "pointer";
  }
  if (lockIcon) {
    lockIcon.textContent = isLocked ? "🔒" : "🔓";
  }
}

function handlePranaGuideClick() {
  const btn = document.getElementById("btn-prana-guide");
  if (btn && btn.disabled) {
    vib(30);
    const lang = cfg.pranaLang || "en";
    const msg = lang === "hi"
      ? "🔒 सक्रिय राउंड गिनती के दौरान शास्त्रीय गाइड लॉक है। विराम लें या गाइड देखने के लिए राउंड पूरा होने की प्रतीक्षा करें!"
      : lang === "mr"
      ? "🔒 ॲक्टिव्ह फेरी मोजणीदरम्यान क्लासिकल मार्गदर्शक लॉक आहे. विराम घ्या किंवा मार्गदर्शक पाहण्यासाठी फेरी पूर्ण होण्याची वाट पाहा!"
      : "🔒 Classical Guide is locked during active round counting. Pause or wait for the round to complete to view!";
    alert(msg);
    return;
  }
  showPranaGuideModal();
}

function speakClassicalGuideText(data) {
  if (voiceMuted || !window.speechSynthesis) return;
  const lang = cfg.pranaLang || "en";

  try {
    try { window.speechSynthesis.cancel(); } catch(e){}

    const targetData = data || (CLASSICAL_YOGA_AYURVEDA_STANDARDS[PRANAYAMA_BASE[pranaState.phaseIdx]?.id] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha);

    const fullText = `${targetData.title}. Classical Text References: ${targetData.classicalText}. 1. Step-by-Step Practice Method: ${targetData.method}. 2. Inhale, Hold, Exhale Ratios: Beginner: ${targetData.ratios.beginner}. Intermediate: ${targetData.ratios.intermediate}. Advanced: ${targetData.ratios.advanced}. 3. Recommended Duration: ${targetData.roundsDuration}. 4. Body Posture and Mudra: ${targetData.postureMudraEye}. 5. Best Time and Empty Stomach: ${targetData.timeFasting}. 6. Physical Health Benefits: ${targetData.physicalBenefits}. 7. Mental and Emotional Benefits: ${targetData.mentalBenefits}. 8. Ayurvedic Benefits: Vata: ${targetData.ayurvedicBenefits.vata}. Pitta: ${targetData.ayurvedicBenefits.pitta}. Kapha: ${targetData.ayurvedicBenefits.kapha}. Agni: ${targetData.ayurvedicBenefits.agni}. Prana: ${targetData.ayurvedicBenefits.prana}. 9. Chakra and Nadi Effects: ${targetData.chakraNadi}. 10. Precautions and Contraindications: ${targetData.precautions}. 11. Progression Guidelines: ${targetData.progression}.`;

    const u = new SpeechSynthesisUtterance(fullText);
    const vList = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];

    u.rate = 1.0;

    if (lang === "hi") {
      u.lang = "hi-IN";
      const hv = vList.find(v => v.lang === "hi-IN" && v.localService) ||
                 vList.find(v => v.lang === "hi-IN") ||
                 vList.find(v => v.lang.startsWith("hi")) || null;
      if (hv) u.voice = hv;
    } else if (lang === "mr") {
      u.lang = "hi-IN";
      const hv = vList.find(v => v.lang === "hi-IN") || null;
      if (hv) u.voice = hv;
    } else {
      u.lang = "en-IN";
      const ev = vList.find(v => v.lang === "en-IN") || vList.find(v => v.lang.startsWith("en")) || null;
      if (ev) u.voice = ev;
    }

    u.onstart = () => {
      _guideSpeechActive = true;
      updateGuideVoiceBtnUI(true);
      pausePranaForGuideSpeech();
    };
    u.onend = () => {
      _guideSpeechActive = false;
      updateGuideVoiceBtnUI(false);
      resumePranaFromGuideSpeech();
    };
    u.onerror = () => {
      _guideSpeechActive = false;
      updateGuideVoiceBtnUI(false);
      resumePranaFromGuideSpeech();
    };

    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("Guide speech error:", e);
  }
}

function toggleGuideVoice() {
  if (_guideSpeechActive) {
    stopClassicalGuideSpeech();
  } else {
    const targetId = PRANAYAMA_BASE[pranaState.phaseIdx] ? PRANAYAMA_BASE[pranaState.phaseIdx].id : "dirgha";
    const data = CLASSICAL_YOGA_AYURVEDA_STANDARDS[targetId] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha;
    speakClassicalGuideText(data);
  }
}

function stopClassicalGuideSpeech() {
  _guideSpeechActive = false;
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  updateGuideVoiceBtnUI(false);
  resumePranaFromGuideSpeech();
}

function updateGuideVoiceBtnUI(isPlaying) {
  const btn = document.getElementById("guide-voice-btn");
  if (btn) {
    btn.innerHTML = isPlaying ? "⏹ Stop Voice" : "🔊 Listen Voice";
    btn.style.background = isPlaying ? "rgba(255,59,48,0.25)" : "var(--acc-dim)";
    btn.style.borderColor = isPlaying ? "var(--danger)" : "var(--acc)";
    btn.style.color = isPlaying ? "var(--danger)" : "var(--acc-lt)";
  }
}

function switchGuideTab(targetId) {
  stopClassicalGuideSpeech();
  showPranaGuideModal(targetId);
}

function showPranaGuideModal(phaseId) {
  const targetId = phaseId || (PRANAYAMA_BASE[pranaState.phaseIdx] ? PRANAYAMA_BASE[pranaState.phaseIdx].id : "dirgha");
  const data = CLASSICAL_YOGA_AYURVEDA_STANDARDS[targetId] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha;

  const titleEl = document.getElementById("guide-modal-title");
  const contentEl = document.getElementById("guide-modal-content");

  const tabs = [
    { id: "dirgha", label: "1. Dirgha" },
    { id: "kapalabhati", label: "2. Kapalabhati" },
    { id: "bhastrika", label: "3. Bhastrika" },
    { id: "anulom", label: "4. Anulom Vilom" },
    { id: "nadi", label: "5. Nadi Shodhana" },
    { id: "ujjayi", label: "6. Ujjayi" },
    { id: "bhramari", label: "7. Bhramari" },
    { id: "meditation", label: "8. Dhyana" }
  ];

  const tabHtml = `
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:10px;border-bottom:1px solid var(--bdr);scrollbar-width:none;-webkit-overflow-scrolling:touch;">
      ${tabs.map(t => `
        <button onclick="switchGuideTab('${t.id}')" style="background:${t.id === targetId ? 'var(--acc-dim)' : 'var(--surf2)'};border:1px solid ${t.id === targetId ? 'var(--acc)' : 'var(--bdr)'};color:${t.id === targetId ? 'var(--acc-lt)' : 'var(--txt2)'};font-size:10px;font-weight:800;padding:5px 10px;border-radius:10px;cursor:pointer;white-space:nowrap;transition:all .2s ease">
          ${t.label}
        </button>
      `).join('')}
    </div>
  `;

  if (titleEl) titleEl.textContent = "📜 " + data.title;
  if (contentEl) {
    contentEl.innerHTML = tabHtml + `
      <div style="background:var(--surf2);border:1px solid var(--acc-dim);border-radius:12px;padding:10px 12px;">
        <div style="font-size:10px;font-weight:800;color:var(--acc-lt);text-transform:uppercase;">Classical Text References</div>
        <div style="font-size:12px;font-weight:700;color:var(--txt);margin-top:2px;">${data.classicalText}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">1. 🧘 Step-by-Step Practice Method</div>
        <div style="color:var(--txt2);">${data.method}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">2. ⏱ Inhale : Hold : Exhale Ratios</div>
        <div style="display:grid;gap:4px;color:var(--txt2);">
          <div>🟢 <strong>Beginner:</strong> ${data.ratios.beginner}</div>
          <div>🟡 <strong>Intermediate:</strong> ${data.ratios.intermediate}</div>
          <div>🔴 <strong>Advanced:</strong> ${data.ratios.advanced}</div>
        </div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">3. 🎯 Rounds &amp; Recommended Duration</div>
        <div style="color:var(--txt2);">${data.roundsDuration}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">4. 🪑 Posture, Hand Mudra &amp; Eye Position</div>
        <div style="color:var(--txt2);">${data.postureMudraEye}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">5. 🌅 Best Time &amp; Empty Stomach Requirements</div>
        <div style="color:var(--txt2);">${data.timeFasting}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">6. 💪 Physical Health Benefits</div>
        <div style="color:var(--txt2);">${data.physicalBenefits}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">7. 🧠 Mental &amp; Emotional Benefits</div>
        <div style="color:var(--txt2);">${data.mentalBenefits}</div>
      </div>

      <div style="background:linear-gradient(135deg,rgba(29,184,127,0.1),rgba(15,80,55,0.2));border:1px solid var(--acc-dim);border-radius:12px;padding:10px 12px;">
        <div style="font-size:11px;font-weight:800;color:var(--acc-lt);margin-bottom:6px;">8. 🌿 Ayurvedic Benefits (Vata, Pitta, Kapha, Agni, Prana)</div>
        <div style="display:grid;gap:4px;color:var(--txt2);">
          <div>💨 <strong>Vata:</strong> ${data.ayurvedicBenefits.vata}</div>
          <div>🔥 <strong>Pitta:</strong> ${data.ayurvedicBenefits.pitta}</div>
          <div>🌊 <strong>Kapha:</strong> ${data.ayurvedicBenefits.kapha}</div>
          <div>⚡ <strong>Agni:</strong> ${data.ayurvedicBenefits.agni}</div>
          <div>🫁 <strong>Prana:</strong> ${data.ayurvedicBenefits.prana}</div>
        </div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">9. 🧘‍♂️ Chakra &amp; Nadi Effects</div>
        <div style="color:var(--txt2);">${data.chakraNadi}</div>
      </div>

      <div style="background:rgba(255,59,48,0.1);border:1px solid rgba(255,59,48,0.3);border-radius:12px;padding:10px 12px;">
        <div style="font-size:11px;font-weight:800;color:var(--danger);margin-bottom:2px;">10. ⚠️ Precautions, Contraindications &amp; Mistakes</div>
        <div style="color:var(--txt2);">${data.precautions}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">11. 📈 Progression Guidelines (Beginner → Advanced)</div>
        <div style="color:var(--txt2);">${data.progression}</div>
      </div>
    `;
  }

  const modal = document.getElementById("prana-guide-modal");
  if (modal) modal.classList.add("show");

  // Automatically start reading guide text out loud for selected practice
  speakClassicalGuideText(data);
}

function closePranaGuideModal() {
  stopClassicalGuideSpeech();
  const modal = document.getElementById("prana-guide-modal");
  if (modal) modal.classList.remove("show");
  resumePranaFromGuideSpeech();
}

/* ── Init ────────────────────────────────────────────────────── */
loadAll();
checkMidnightRollover(); // Rollover immediately if launched on a new day
saveAll();
render();
updateWaterTrackerUI();
updateDietPlanButtonLockUI();
updateClockDisplay();
scheduleMidnightRollover(); // schedule goal unlock at 12:00 AM Midnight
scheduleAlarm();            // schedule 5 AM alarm
checkMorningGreeting();     // greet if user opens app near alarm time
scheduleAyurvedicDietNotifications(); // schedule Ayurvedic diet notifications
scheduleWaterIntakeReminders(); // schedule 2-hourly water hydration reminders
checkSubscriptionReminder();
checkAppLockState();

/* ── SW Lockscreen Notification Click Handler ────────────────── */
if (typeof navigator !== "undefined" && navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener("message", e => {
    if (e.data && e.data.type === "NOTIFICATION_CLICK") {
      if (e.data.action === "log_water") {
        quickLogWaterAndSpeak();
      } else {
        showDietModal("water", "water");
      }
    }
  });
}

try {
  const urlParams = new URLSearchParams(window.location.search);
  const actionParam = urlParams.get("notif_action");
  if (actionParam === "log_water") {
    setTimeout(() => quickLogWaterAndSpeak(), 800);
  } else if (actionParam === "water" || actionParam === "view_diet") {
    setTimeout(() => showDietModal("water", "water"), 800);
  }
} catch (e) {}

/* ═══════════════════════════════════════════════════════════════
   30-SECOND WHATSAPP STATUS HIGHLIGHT RECORDING & SHARING ENGINE
   ═══════════════════════════════════════════════════════════════ */
let statusMediaRecorder = null;
let statusRecordedChunks = [];
let statusRecordTimer = null;
let statusRecordSeconds = 0;
let statusRecordedBlob = null;

async function startStatusRecording() {
  try {
    statusRecordedChunks = [];
    statusRecordedBlob = null;

    let stream;
    // 1. Capture screen & app audio (prompts Android system recording dialog)
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: 'browser', width: { max: 1080 }, height: { max: 1920 } },
        audio: true
      });
    } else {
      alert("Screen recording API is not supported in this browser. Please open in Google Chrome on Android.");
      return;
    }

    const mimeTypes = ['video/webm;codecs=vp9,opus', 'video/webm', 'video/mp4'];
    let selectedMime = mimeTypes.find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) || '';
    
    statusMediaRecorder = new MediaRecorder(stream, selectedMime ? { mimeType: selectedMime } : {});

    statusMediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) statusRecordedChunks.push(e.data);
    };

    statusMediaRecorder.onstop = () => {
      statusRecordedBlob = new Blob(statusRecordedChunks, { type: selectedMime || 'video/webm' });
      if (stream) stream.getTracks().forEach(t => t.stop());
      showStatusVideoModal();
    };

    statusMediaRecorder.start(1000);
    statusRecordSeconds = 0;
    updateStatusRecordBtnUI(true);

    statusRecordTimer = setInterval(() => {
      statusRecordSeconds++;
      updateStatusRecordBtnUI(true);
      if (statusRecordSeconds >= 30) {
        stopStatusRecording();
      }
    }, 1000);

  } catch (err) {
    if (err.name !== "AbortError") {
      console.warn("Screen recording cancelled or failed:", err);
    }
    updateStatusRecordBtnUI(false);
  }
}

function stopStatusRecording() {
  if (statusRecordTimer) { clearInterval(statusRecordTimer); statusRecordTimer = null; }
  if (statusMediaRecorder && statusMediaRecorder.state !== 'inactive') {
    statusMediaRecorder.stop();
  }
  updateStatusRecordBtnUI(false);
}

function toggleStatusRecording() {
  if (statusMediaRecorder && statusMediaRecorder.state === 'recording') {
    stopStatusRecording();
  } else {
    startStatusRecording();
  }
}

function updateStatusRecordBtnUI(isRecording) {
  const lbl = document.getElementById("rec-status-lbl");
  const dot = document.getElementById("rec-dot");
  if (!lbl || !dot) return;

  if (isRecording) {
    dot.style.background = "#EF4444";
    dot.style.animation = "pulse 1s infinite";
    lbl.textContent = `🔴 Recording 30s Status: ${statusRecordSeconds}s / 30s (Tap to stop)`;
  } else {
    dot.style.background = "#EF4444";
    dot.style.animation = "none";
    lbl.textContent = "🎥 Record 30s WhatsApp Status Clip";
  }
}

function showStatusVideoModal() {
  if (!statusRecordedBlob) return;
  const vid = document.getElementById("status-video-preview");
  if (vid) {
    vid.src = URL.createObjectURL(statusRecordedBlob);
  }
  const modal = document.getElementById("status-video-modal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }
}

function closeStatusVideoModal() {
  const modal = document.getElementById("status-video-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  const vid = document.getElementById("status-video-preview");
  if (vid) { vid.pause(); vid.src = ""; }
}

async function shareStatusVideoToWhatsApp() {
  if (!statusRecordedBlob) return;

  const ext = statusRecordedBlob.type.includes("mp4") ? "mp4" : "webm";
  const file = new File([statusRecordedBlob], `surya_namaskara_30s_status.${ext}`, { type: statusRecordedBlob.type });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "Surya Namaskara 30s Status Clip",
        text: "Completed my Surya Namaskara session! ☀️🧘 #SuryaNamaskara #SuryaSarathi"
      });
      return;
    } catch (e) {
      if (e.name !== 'AbortError') console.error("Share failed:", e);
    }
  }
  
  downloadStatusVideo();
  alert("Video downloaded! You can now attach it directly to your WhatsApp Status.");
}

function downloadStatusVideo() {
  if (!statusRecordedBlob) return;
  const ext = statusRecordedBlob.type.includes("mp4") ? "mp4" : "webm";
  const url = URL.createObjectURL(statusRecordedBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `SuryaNamaskara_30s_Status_${Date.now()}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

window.toggleStatusRecording = toggleStatusRecording;
window.closeStatusVideoModal = closeStatusVideoModal;
window.shareStatusVideoToWhatsApp = shareStatusVideoToWhatsApp;
window.downloadStatusVideo = downloadStatusVideo;

/* ═══════════════════════════════════════════════════════════════
   AUTOMATIC HIGHLIGHT REEL GENERATOR ENGINE
   Auto-Captures Goal Complete & 1000/2000/3000 Milestone Achievements!
   ═══════════════════════════════════════════════════════════════ */
let generatedReelBlob = null;
let isGeneratingReel = false;

async function autoGenerateWorkoutReel(info) {
  if (isGeneratingReel) {
    console.log("[Reel Generator] Already generating reel, skipping concurrent run.");
    return;
  }
  isGeneratingReel = true;

  const btn = document.getElementById("btn-open-reel");
  if (btn) {
    btn.innerHTML = `🎬 Generating Workout Reel <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">0%</span>`;
  }

  let animInterval = null;
  let hardTimeout = null;

  const resetGeneratorState = () => {
    isGeneratingReel = false;
    if (animInterval) { clearInterval(animInterval); animInterval = null; }
    if (hardTimeout) { clearTimeout(hardTimeout); hardTimeout = null; }
    const b = document.getElementById("btn-open-reel");
    if (b) {
      b.innerHTML = `🎬 Download / Share Workout Reel <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">HD Reel</span>`;
    }
  };

  // Hard timeout safety (60s max) to guarantee generator never gets stuck looping
  hardTimeout = setTimeout(() => {
    console.warn("[Reel Generator] Hard safety timeout (60s) reached. Resetting recorder...");
    resetGeneratorState();
  }, 60000);

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 1280; // 9:16 Vertical Reel format
    const ctx = canvas.getContext("2d");

    const name = info?.name || cfg.userName || "Vaibhav";
    const todaySets = info?.todaySets || todayDone();
    const totalSets = info?.totalSets || data.totalAllTime;
    const type = info?.type || "goal_complete";
    const streak = computeStreak();

    let stream = null;
    try {
      stream = canvas.captureStream ? canvas.captureStream(30) : null;
    } catch(e){ stream = null; }

    const mimeTypes = ['video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4;codecs=h264', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm'];
    let selectedMime = mimeTypes.find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) || '';

    let recorder = null;
    if (stream && typeof MediaRecorder !== "undefined") {
      try {
        recorder = new MediaRecorder(stream, selectedMime ? { mimeType: selectedMime } : {});
      } catch(e){ recorder = null; }
    }

    const chunks = [];

    if (recorder) {
      recorder.ondataavailable = e => { if (e.data && e.data.size > 0) chunks.push(e.data); };

      recorder.onstop = async () => {
        try {
          if (chunks.length > 0) {
            const finalMime = (selectedMime && selectedMime.includes("mp4")) ? "video/mp4" : (selectedMime || "video/mp4");
            generatedReelBlob = new Blob(chunks, { type: finalMime });
          }
        } catch(e){}
        
        // Register today's reel in storage tracking (default savedOrShared = false)
        if (!data.reels) data.reels = {};
        const tKey = todayKey();
        if (!data.reels[tKey]) {
          data.reels[tKey] = { date: tKey, savedOrShared: false, timestamp: Date.now() };
          saveAll();
        }
        cleanupOldWorkoutReels();
        showReelSocialModal(info);
        resetGeneratorState();
      };

      try { recorder.start(1000); } catch(e){}
    }

    // Render 9:16 Animated Canvas Reel (17 seconds total: 9s Gita Opening + 8s Workout Highlights)
    let frame = 0;
    const maxFrames = 510; // 17 seconds @ 30 FPS
    const d = new Date();
    const dateStr = d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });

    // Fetch Today's Gita Quote & Meaning for Scene 1
    const gQuote = typeof getDailyGitaQuote === "function" ? getDailyGitaQuote() : { ref: "श्रीमद्भगवद्गीता २.४७", sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥", hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं।" };
    const gMeaning = typeof getQuoteMeaning === "function" ? getQuoteMeaning(gQuote) : (gQuote.hi || gQuote.en || "");
    const rawSanskrit = gQuote.sanskrit || gQuote.shloka || "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥";

    animInterval = setInterval(() => {
      frame++;

      if (frame % 5 === 0 || frame === maxFrames) {
        const pct = Math.min(100, Math.floor((frame / maxFrames) * 100));
        const b = document.getElementById("btn-open-reel");
        if (b) {
          b.innerHTML = `🎬 Generating Reel <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">${pct}%</span>`;
        }
      }

      // ═════════════════════════════════════════════════════════════
      // SCENE 1 (Frames 1 to 270 = 0s to 9.0s): BHAGAVAD GITA OPENING
      // ═════════════════════════════════════════════════════════════
      if (frame <= 270) {
        let opacity = 1;
        if (frame > 240) opacity = (270 - frame) / 30; // Smooth fade out to Scene 2

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

        // 1. Deep Emerald & Solar Gold Shimmer Gradient
        const gGrad = ctx.createRadialGradient(360, 400, 40, 360, 640, 750);
        gGrad.addColorStop(0, '#132A1C');
        gGrad.addColorStop(0.6, '#0B1710');
        gGrad.addColorStop(1, '#050B08');
        ctx.fillStyle = gGrad;
        ctx.fillRect(0, 0, 720, 1280);

        // 2. Rotating Aura Rays
        ctx.save();
        ctx.translate(360, 450);
        ctx.rotate((frame * 0.01) % (Math.PI * 2));
        ctx.strokeStyle = "rgba(245, 158, 11, 0.15)";
        ctx.lineWidth = 2.5;
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(i * Math.PI / 6) * 380, Math.sin(i * Math.PI / 6) * 380);
          ctx.stroke();
        }
        ctx.restore();

        // 3. Header Banner
        ctx.fillStyle = "#F59E0B";
        ctx.font = "800 22px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("☀️ MORNING MOTIVATION · BHAGAVAD GITA 📜", 360, 110);

        // Reference
        ctx.fillStyle = "#FBBF24";
        ctx.font = "900 28px Outfit, sans-serif";
        ctx.shadowColor = "rgba(251, 191, 36, 0.5)";
        ctx.shadowBlur = 12;
        ctx.fillText(gQuote.ref || "श्रीमद्भगवद्गीता", 360, 160);
        ctx.shadowBlur = 0;

        // 4. Sanskrit Shloka Box (Golden Devanagari)
        const sBoxY = 210;
        ctx.fillStyle = "rgba(29, 184, 127, 0.16)";
        ctx.strokeStyle = "rgba(93, 224, 168, 0.45)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(50, sBoxY, 620, 360, 24);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFD700";
        ctx.font = "900 28px 'Noto Sans Devanagari', 'Mukta', 'Kohinoor Devanagari', 'Segoe UI Historic', 'Arial Unicode MS', sans-serif";
        const shlokaLines = rawSanskrit.split("\n");
        let lineY = sBoxY + (shlokaLines.length > 2 ? 65 : 90);
        shlokaLines.forEach(line => {
          ctx.fillText(line.trim(), 360, lineY);
          lineY += 50;
        });

        // 5. Meaning / Translation Box
        const mBoxY = 610;
        ctx.fillStyle = "rgba(30, 41, 59, 0.88)";
        ctx.strokeStyle = "rgba(96, 165, 250, 0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(50, mBoxY, 620, 360, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#93C5FD";
        ctx.font = "800 20px Outfit, sans-serif";
        ctx.fillText("MEANING / अर्थ / भावार्थ", 360, mBoxY + 45);

        // Word-wrapped Meaning text
        ctx.fillStyle = "#F9FAFB";
        ctx.font = "600 23px 'Noto Sans Devanagari', Outfit, sans-serif";
        wrapCanvasText(ctx, gMeaning, 360, mBoxY + 105, 550, 38);

        // Bottom Watermark
        ctx.fillStyle = "rgba(245, 158, 11, 0.8)";
        ctx.font = "700 20px Outfit, sans-serif";
        ctx.fillText("☀️ Suryasarthi 108 · Daily Yoga & Wisdom 🧘", 360, 1050);

        ctx.restore();
        return;
      }

      // ═════════════════════════════════════════════════════════════
      // SCENE 2 (Frames 271 to 510 = 9s to 17s): WORKOUT HIGHLIGHTS
      // ═════════════════════════════════════════════════════════════
      const scene2Frame = frame - 270;
      const scene2MaxFrames = 240;

      // 1. Dark Solar Background Gradient
      const grad = ctx.createRadialGradient(360, 400, 50, 360, 640, 800);
      grad.addColorStop(0, '#1E293B');
      grad.addColorStop(0.5, '#0F172A');
      grad.addColorStop(1, '#070B14');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 720, 1280);

      // 2. Rotating Sun Rays Aura
      ctx.save();
      ctx.translate(360, 450);
      ctx.rotate((scene2Frame * 0.015) % (Math.PI * 2));
      ctx.strokeStyle = "rgba(245, 158, 11, 0.12)";
      ctx.lineWidth = 3;
      for (let i = 0; i < 16; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(i * Math.PI / 8) * 350, Math.sin(i * Math.PI / 8) * 350);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Header Title & App Name
      ctx.fillStyle = "#FBBF24";
      ctx.font = "900 32px Outfit, sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(245, 158, 11, 0.6)";
      ctx.shadowBlur = 15;
      ctx.fillText("☀️ SURYASARTHI 108 🧘", 360, 90);
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#93C5FD";
      ctx.font = "700 22px Outfit, sans-serif";
      ctx.fillText(`Daily Practice Reel · ${dateStr}`, 360, 130);

      // 4. User Name Badge
      ctx.fillStyle = "rgba(30, 41, 59, 0.8)";
      ctx.strokeStyle = "#38BDF8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(160, 160, 400, 50, 25);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#F9FAFB";
      ctx.font = "800 24px Outfit, sans-serif";
      ctx.fillText(`Namaste, ${name}! 🙏`, 360, 194);

      // 5. Central Animated Sun Disc Ring
      const ringRadius = 140;
      ctx.beginPath();
      ctx.arc(360, 460, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96, 165, 250, 0.25)";
      ctx.lineWidth = 14;
      ctx.stroke();

      // Progress Arc
      const progress = Math.min(1, scene2Frame / scene2MaxFrames);
      ctx.beginPath();
      ctx.arc(360, 460, ringRadius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * progress));
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(245, 158, 11, 0.8)";
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Sanskrit Mantra inside ring
      ctx.fillStyle = "#FFD700";
      ctx.font = "900 36px 'Noto Sans Devanagari', serif";
      ctx.fillText("ॐ सूर्याय नमः", 360, 440);

      ctx.fillStyle = "#FBBF24";
      ctx.font = "800 26px Outfit, sans-serif";
      ctx.fillText(`Round ${todaySets} Mastered`, 360, 490);

      // 6. Highlighted Achievement Card
      const cardY = 660;
      let cardBg = "rgba(16, 185, 129, 0.22)";
      let cardBdr = "#10B981";

      if (type === "streak_milestone") {
        cardBg = "rgba(245, 158, 11, 0.25)";
        cardBdr = "#F59E0B";
      } else if (type === "lifetime_milestone") {
        cardBg = "rgba(168, 85, 247, 0.25)";
        cardBdr = "#A855F7";
      }

      ctx.fillStyle = cardBg;
      ctx.strokeStyle = cardBdr;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, cardY, 560, 160, 20);
      ctx.fill();
      ctx.stroke();

      if (type === "streak_milestone") {
        const sDays = info?.streakDays || streak;
        ctx.fillStyle = "#FDE68A";
        ctx.font = "900 28px Outfit, sans-serif";
        if (sDays === 21) {
          ctx.fillText(`🌟 21 DAYS YOGA HABIT FORMED!`, 360, cardY + 50);
        } else if (sDays === 14) {
          ctx.fillText(`⚡ 14 DAYS CONTINUOUS PRACTICE!`, 360, cardY + 50);
        } else if (sDays === 7) {
          ctx.fillText(`🔥 7 DAYS CONTINUOUS STREAK!`, 360, cardY + 50);
        } else {
          ctx.fillText(`🔥 ${sDays} DAYS CONTINUOUS STREAK!`, 360, cardY + 50);
        }

        ctx.fillStyle = "#FBBF24";
        ctx.font = "900 36px Outfit, sans-serif";
        ctx.fillText(`Unbroken Discipline Mastered! ☀️`, 360, cardY + 110);

      } else if (type === "lifetime_milestone") {
        ctx.fillStyle = "#E9D5FF";
        ctx.font = "900 28px Outfit, sans-serif";
        ctx.fillText(`🏆 INCREDIBLE MILESTONE!`, 360, cardY + 50);

        ctx.fillStyle = "#C084FC";
        ctx.font = "900 38px Outfit, sans-serif";
        ctx.fillText(`${totalSets} Total Sets Achieved! 🔥`, 360, cardY + 110);
      } else {
        ctx.fillStyle = "#34D399";
        ctx.font = "900 28px Outfit, sans-serif";
        ctx.fillText(`🎯 TODAY'S GOAL COMPLETED!`, 360, cardY + 50);

        ctx.fillStyle = "#6EE7B7";
        ctx.font = "900 38px Outfit, sans-serif";
        ctx.fillText(`${todaySets} Sets Mastered Today! ☀️`, 360, cardY + 110);
      }

      // 7. Stats Grid (Today / Streak / Lifetime Total)
      const gridY = 860;
      const colWidth = 170;
      const gap = 20;

      // Col 1: Today
      ctx.fillStyle = "rgba(6, 182, 212, 0.2)";
      ctx.strokeStyle = "#06B6D4";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(80, gridY, colWidth, 120, 16);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#7DD3FC"; ctx.font = "800 16px Outfit, sans-serif";
      ctx.fillText("TODAY", 80 + colWidth/2, gridY + 35);
      ctx.fillStyle = "#22D3EE"; ctx.font = "900 34px Outfit, sans-serif";
      ctx.fillText(`${todaySets}`, 80 + colWidth/2, gridY + 85);

      // Col 2: Streak
      ctx.fillStyle = "rgba(16, 185, 129, 0.2)";
      ctx.strokeStyle = "#10B981";
      ctx.beginPath();
      ctx.roundRect(80 + colWidth + gap, gridY, colWidth, 120, 16);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#6EE7B7"; ctx.font = "800 16px Outfit, sans-serif";
      ctx.fillText("STREAK", 80 + colWidth + gap + colWidth/2, gridY + 35);
      ctx.fillStyle = "#34D399"; ctx.font = "900 34px Outfit, sans-serif";
      ctx.fillText(`${streak}d 🔥`, 80 + colWidth + gap + colWidth/2, gridY + 85);

      // Col 3: Total All-Time
      ctx.fillStyle = "rgba(168, 85, 247, 0.2)";
      ctx.strokeStyle = "#A855F7";
      ctx.beginPath();
      ctx.roundRect(80 + (colWidth + gap)*2, gridY, colWidth, 120, 16);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#D8B4FE"; ctx.font = "800 16px Outfit, sans-serif";
      ctx.fillText("TOTAL", 80 + (colWidth + gap)*2 + colWidth/2, gridY + 35);
      ctx.fillStyle = "#C084FC"; ctx.font = "900 34px Outfit, sans-serif";
      ctx.fillText(`${totalSets}`, 80 + (colWidth + gap)*2 + colWidth/2, gridY + 85);

      // 8. Bottom Watermark & Call to Action
      ctx.fillStyle = "rgba(245, 158, 11, 0.85)";
      ctx.font = "800 22px Outfit, sans-serif";
      ctx.fillText("✨ Health, Energy & Vitality Every Day ✨", 360, 1040);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "600 18px Outfit, sans-serif";
      ctx.fillText("Track your 108 Surya Namaskara with Suryasarthi App", 360, 1080);

      if (frame >= maxFrames) {
        if (animInterval) { clearInterval(animInterval); animInterval = null; }
        if (hardTimeout) { clearTimeout(hardTimeout); hardTimeout = null; }
        setStatus("✨ Reel Video Ready!");

        const finishReelAndOpenModal = async () => {
          if (!generatedReelBlob) {
            try {
              const dataUrl = canvas.toDataURL("image/png");
              const res = await fetch(dataUrl);
              generatedReelBlob = await res.blob();
            } catch(e){}
          }
          if (!data.reels) data.reels = {};
          const tKey = todayKey();
          if (!data.reels[tKey]) {
            data.reels[tKey] = { date: tKey, savedOrShared: false, timestamp: Date.now() };
            saveAll();
          }
          cleanupOldWorkoutReels();
          showReelSocialModal(info);
          resetGeneratorState();
        };

        if (recorder && recorder.state !== 'inactive') {
          let stopFired = false;
          recorder.onstop = async () => {
            if (stopFired) return;
            stopFired = true;
            try {
              if (chunks.length > 0) {
                generatedReelBlob = new Blob(chunks, { type: selectedMime || 'video/webm' });
              }
            } catch(e){}
            await finishReelAndOpenModal();
          };

          try { recorder.stop(); } catch(e){ finishReelAndOpenModal(); }

          setTimeout(async () => {
            if (!stopFired) {
              stopFired = true;
              await finishReelAndOpenModal();
            }
          }, 1000);

        } else {
          finishReelAndOpenModal();
        }
      }
    }, 1000 / 30);

  } catch (err) {
    console.error("Auto Reel generation error:", err);
    resetGeneratorState();
  }
}

function showReelConfirmModal(info) {
  showReelSocialModal(info);
}

function closeReelConfirmModal() {
  const modal = document.getElementById("reel-confirm-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
}

function confirmOpenReelPreview() {
  closeReelConfirmModal();
  showReelSocialModal({
    type: "goal_complete",
    todaySets: todayDone(),
    totalSets: data.totalAllTime,
    name: cfg.userName || "Vaibhav"
  });
}

function confirmDownloadReelDirect() {
  closeReelConfirmModal();
  downloadReelVideo();
}

function showReelSocialModal(info) {
  if (!generatedReelBlob) return;

  const vid = document.getElementById("reel-video-preview");
  const img = document.getElementById("reel-image-preview");
  const isImage = generatedReelBlob.type.startsWith("image/");
  const blobUrl = URL.createObjectURL(generatedReelBlob);

  if (isImage) {
    if (vid) { vid.style.display = "none"; try { vid.pause(); vid.src = ""; } catch(e){} }
    if (img) { img.style.display = "block"; img.src = blobUrl; }
  } else {
    if (img) { img.style.display = "none"; img.src = ""; }
    if (vid) { vid.style.display = "block"; vid.src = blobUrl; try { vid.play().catch(e=>{}); } catch(e){} }
  }

  const subLbl = document.getElementById("reel-modal-subtitle");
  if (subLbl && info) {
    const setsDone = info.todaySets || todayDone();
    if (info.type === "streak_milestone") {
      subLbl.textContent = `🔥 Continuous Streak Reel: ${info.streakDays || computeStreak()} Days Continuous Workout Mastered!`;
    } else if (info.type === "lifetime_milestone") {
      subLbl.textContent = `🏆 Milestone Reel: ${info.totalSets} Total Lifetime Sets Mastered!`;
    } else {
      subLbl.textContent = `🎯 Goal Complete Reel: ${setsDone} Rounds Mastered Today!`;
    }
  }

  const modal = document.getElementById("reel-social-modal");
  if (modal) {
    modal.style.cssText = "display:flex !important; position:fixed !important; inset:0 !important; z-index:999999 !important; background:rgba(7,11,20,0.95) !important; backdrop-filter:blur(16px) !important; align-items:center !important; justify-content:center !important;";
    modal.classList.add("show");
  }

  // Play synchronized scene voice narration when modal opens
  if (window.speechSynthesis && !voiceMuted) {
    try {
      window.speechSynthesis.resume();
      qClear();

      const gQuote = typeof getDailyGitaQuote === "function" ? getDailyGitaQuote() : { ref: "श्रीमद्भगवद्गीता २.४७", sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥", hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं।" };
      const gMeaning = typeof getQuoteMeaning === "function" ? getQuoteMeaning(gQuote) : (gQuote.hi || gQuote.en || "");
      const rawSanskrit = gQuote.sanskrit || gQuote.shloka || "";

      // 1. Scene 1 Voice: Sanskrit Shloka + Meaning
      const shlokaText = (gQuote.ref || "श्रीमद्भगवद्गीता") + ". " + rawSanskrit.replace(/\n/g, " ") + ". अर्थ: " + gMeaning;
      const u1 = new SpeechSynthesisUtterance(shlokaText);
      u1.rate = 0.92;
      u1.lang = "hi-IN";

      // 2. Scene 2 Voice: Today's Rounds + Total Rounds + High Energy Motivational Appreciation
      const todaySets = info?.todaySets || todayDone();
      const totalSets = info?.totalSets || data.totalAllTime;
      const streakDays = computeStreak();
      const name = info?.name || cfg.userName || "Vaibhav";
      const lang = cfg.quoteLang || cfg.pranaLang || "hi";

      const scene2Text = lang === "hi"
        ? `उत्कृष्ट साधना ${name}! आज आपने ${todaySets} सूर्य नमस्कार सफलतापूर्वक पूरे किए हैं। आपका लगातार वर्कआउट स्ट्रिक ${streakDays} दिन का है और कुल लाइफटाइम सेट ${totalSets} हैं। शानदार समर्पण!`
        : `Sensational achievement ${name}! Today you completed ${todaySets} rounds of Surya Namaskara. You have mastered a ${streakDays} day continuous workout streak and ${totalSets} total lifetime rounds. Keep shining with divine solar energy everyday!`;

      const u2 = new SpeechSynthesisUtterance(scene2Text);
      u2.rate = 0.95;
      u2.lang = lang === "en" ? "en-IN" : "hi-IN";

      qSpeak(u1);
      qSpeak(u2);
    } catch(e){}
  }
}

function closeReelSocialModal() {
  const modal = document.getElementById("reel-social-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  const vid = document.getElementById("reel-video-preview");
  if (vid) { try { vid.pause(); vid.src = ""; } catch(e){} }
  const img = document.getElementById("reel-image-preview");
  if (img) { img.style.display = "none"; img.src = ""; }

  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    qClear();
  } catch(e){}
}

async function shareReelToSocialMedia() {
  if (!generatedReelBlob) return;
  markReelAsSavedOrShared();

  const shareBtn = document.getElementById("btn-share-reel");
  if (shareBtn) shareBtn.innerHTML = "📲 Preparing WhatsApp Share... 100% ✓";

  const isImg = generatedReelBlob.type.startsWith("image/");
  const ext = isImg ? "png" : (generatedReelBlob.type.includes("mp4") ? "mp4" : "webm");
  const fileName = `SuryaNamaskara_Workout_Reel_${Date.now()}.${ext}`;
  const file = new File([generatedReelBlob], fileName, { type: generatedReelBlob.type });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "My Surya Namaskara Workout Reel",
        text: "Completed my Surya Namaskara session! ☀️🧘 #SuryaNamaskara #SuryaSarathi108"
      });
      if (shareBtn) shareBtn.innerHTML = "📲 Share Reel to WhatsApp Status";
      return;
    } catch (e) {
      if (e.name !== 'AbortError') console.error("Share failed:", e);
    }
  }
  
  downloadReelVideo();
  if (shareBtn) shareBtn.innerHTML = "📲 Share Reel to WhatsApp Status";
}

async function downloadReelVideo() {
  if (!generatedReelBlob) {
    alert("Reel video is not ready yet. Generating your workout reel now...");
    handleOpenReelClick();
    return;
  }
  markReelAsSavedOrShared();

  const dlBtn = document.getElementById("btn-download-reel");
  if (dlBtn) dlBtn.innerHTML = "📥 Saved MP4 to Gallery! 100% ✓";

  const isImg = generatedReelBlob.type.startsWith("image/");
  const ext = isImg ? "png" : "mp4";
  const fileName = `SuryaNamaskara_Workout_Reel_${Date.now()}.${ext}`;

  // 1. Direct Browser MP4 File Download
  try {
    const url = URL.createObjectURL(generatedReelBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.setAttribute("download", fileName);
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      try { document.body.removeChild(a); } catch(e){}
    }, 1500);
  } catch(e) {
    console.warn("Direct MP4 download error:", e);
  }

  // 2. Mobile Native Share/Save Sheet (Android & iOS Gallery)
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile && navigator.canShare) {
    try {
      const file = new File([generatedReelBlob], fileName, { type: isImg ? "image/png" : "video/mp4" });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Save Surya Namaskara Reel MP4",
          text: "Save your Surya Namaskara Reel MP4 video to your device gallery!"
        });
      }
    } catch (e){}
  }

  // 3. Base64 DataURL Backup for WebViews
  try {
    const reader = new FileReader();
    reader.onloadend = function() {
      try {
        const base64data = reader.result;
        const a2 = document.createElement("a");
        a2.href = base64data;
        a2.download = fileName;
        a2.setAttribute("download", fileName);
        document.body.appendChild(a2);
        a2.click();
        setTimeout(() => { try { document.body.removeChild(a2); } catch(e){} }, 1500);
      } catch(e){}
    };
    reader.readAsDataURL(generatedReelBlob);
  } catch(e){}

  setTimeout(() => {
    if (dlBtn) dlBtn.innerHTML = "📥 Save Reel MP4 to Gallery / Device";
  }, 2500);
}

/* ── Automatic Reel Data Storage Cleanup (Retain Last 2 Days Only) ── */
function markReelAsSavedOrShared() {
  if (!data.reels) data.reels = {};
  const tKey = todayKey();
  if (!data.reels[tKey]) {
    data.reels[tKey] = { date: tKey, savedOrShared: true, timestamp: Date.now() };
  } else {
    data.reels[tKey].savedOrShared = true;
  }
  saveAll();
}

function cleanupOldWorkoutReels() {
  if (!data.reels) data.reels = {};

  const todayMs = new Date().setHours(0, 0, 0, 0);
  const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

  const dateKeys = Object.keys(data.reels);
  let purgedCount = 0;

  dateKeys.forEach(dateKey => {
    const reelItem = data.reels[dateKey];
    if (!reelItem) return;

    const parts = dateKey.split("-").map(Number);
    if (parts.length === 3) {
      const reelDateMs = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
      const ageMs = todayMs - reelDateMs;

      // Automatically remove reels that are older than 2 days if NOT downloaded or shared!
      if (ageMs > TWO_DAYS_MS && !reelItem.savedOrShared) {
        delete data.reels[dateKey];
        try { localStorage.removeItem("surya_reel_" + dateKey); } catch(e){}
        purgedCount++;
      }
    }
  });

  if (purgedCount > 0) {
    saveAll();
    console.log(`[Reel Auto-Cleanup] Automatically purged ${purgedCount} un-shared reel(s) older than 2 days.`);
  }
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  if (!text) return;
  const words = text.split(' ');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
}

function handleOpenReelClick() {
  if (generatedReelBlob) {
    showReelSocialModal({
      type: "goal_complete",
      todaySets: todayDone(),
      totalSets: data.totalAllTime,
      name: cfg.userName || "Vaibhav"
    });
  } else {
    setStatus("Generating Workout Reel...");
    autoGenerateWorkoutReel({
      type: "goal_complete",
      todaySets: todayDone(),
      totalSets: data.totalAllTime,
      name: cfg.userName || "Vaibhav"
    });
  }
}

window.calcAyurvedicHydrationAndProtein = calcAyurvedicHydrationAndProtein;
window.openAyurvedicDietModal = typeof openAyurvedicDietModal !== "undefined" ? openAyurvedicDietModal : function(){};
window.closeAyurvedicDietModal = typeof closeAyurvedicDietModal !== "undefined" ? closeAyurvedicDietModal : function(){};
window.closeDietModal = typeof closeDietModal !== "undefined" ? closeDietModal : window.closeAyurvedicDietModal;
window.handleDietPlanClick = typeof handleDietPlanClick !== "undefined" ? handleDietPlanClick : function(){};
window.speakAyurvedicDietPlan = typeof speakAyurvedicDietPlan !== "undefined" ? speakAyurvedicDietPlan : function(){};
window.speakDietAdvice = typeof speakDietAdvice !== "undefined" ? speakDietAdvice : function(){};
window.exportDataBackup = typeof exportDataBackup !== "undefined" ? exportDataBackup : function(){};
window.importDataBackup = typeof importDataBackup !== "undefined" ? importDataBackup : function(){};
window.scanAndRecover = typeof scanAndRecover !== "undefined" ? scanAndRecover : function(){};
window.clearAppCacheAndReload = typeof clearAppCacheAndReload !== "undefined" ? clearAppCacheAndReload : function(){ location.reload(true); };
window.quickLogWaterAndSpeak = typeof quickLogWaterAndSpeak !== "undefined" ? quickLogWaterAndSpeak : function(){};
window.logWaterGlass = typeof logWaterGlass !== "undefined" ? logWaterGlass : function(){};
window.showPaywallOverlay = typeof showPaywallOverlay !== "undefined" ? showPaywallOverlay : function(){};
window.closePaywallOverlay = typeof closePaywallOverlay !== "undefined" ? closePaywallOverlay : function(){};
window.selectSubTier = typeof selectSubTier !== "undefined" ? selectSubTier : function(){};
window.executePlayPurchase = typeof executePlayPurchase !== "undefined" ? executePlayPurchase : function(){};
window.handlePranaGuideClick = typeof handlePranaGuideClick !== "undefined" ? handlePranaGuideClick : function(){};
window.toggleGuideVoice = typeof toggleGuideVoice !== "undefined" ? toggleGuideVoice : function(){};
window.closePranaGuideModal = typeof closePranaGuideModal !== "undefined" ? closePranaGuideModal : function(){};
window.updateDietPlanButtonLockUI = typeof updateDietPlanButtonLockUI !== "undefined" ? updateDietPlanButtonLockUI : function(){};
