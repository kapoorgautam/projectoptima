




import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, Phone, Heart, Clock, Users, Award, Star } from 'lucide-react';

/**
 * PhysioTreatments Component
 * 
 * A React component that displays a physiotherapy treatment page with a small hero section,
 * a grid of treatment cards, a modal for detailed treatment information, and a CTA section.
 * Features include accessibility enhancements and responsive design.
 * 
 * @returns {JSX.Element} The rendered physiotherapy treatments page.
 */
const PhysioTreatments = () => {
  // State to track the selected treatment for the modal
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to track which elements are visible on the screen for animation
  const [visibleElements, setVisibleElements] = useState({});

  // Reference to the main section for scroll animation
  const sectionReference = useRef(null);

  // Array of references to treatment cards for individual scroll animations
  const treatmentReferences = useRef([]);

  /**
   * Effect Hook for Scroll Animation
   * 
   * Sets up an IntersectionObserver to detect when elements enter the viewport and triggers
   * animations by updating the visibleElements state.
   */
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.id) {
            setVisibleElements((previousState) => ({
              ...previousState,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionReference.current) {
      sectionReference.current.dataset.id = 'section';
      scrollObserver.observe(sectionReference.current);
    }

    treatmentReferences.current.forEach((reference, index) => {
      if (reference) {
        reference.dataset.id = `treatment-${index}`;
        scrollObserver.observe(reference);
      }
    });

    return () => {
      if (sectionReference.current) scrollObserver.unobserve(sectionReference.current);
      treatmentReferences.current.forEach((reference) => {
        if (reference) scrollObserver.unobserve(reference);
      });
    };
  }, []);

  /**
   * Effect Hook for Modal Behavior
   * 
   * Manages body overflow to prevent scrolling when the modal is open and restores it when closed.
   */
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  /**
   * Effect Hook for Escape Key Handling
   * 
   * Listens for the Escape key to close the modal when pressed.
   */
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  // Object containing all treatment data
  const treatmentData = {
    'back-pain': {
      title: 'Back Pain / Stiff Back Treatment',
      shortDescription: 'Comprehensive treatment for lower back pain, muscle stiffness, and spinal alignment issues using evidence-based techniques.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      content: `
        <h3>Understanding Back Pain</h3>
        <p>Back pain is one of the most common reasons people seek physiotherapy treatment. Our comprehensive approach addresses both acute and chronic back pain conditions, focusing on pain relief, improved mobility, and long-term prevention strategies through personalized care plans.</p>
        
        <h3>Common Causes & Assessment</h3>
        <p>Back pain can result from various factors including poor posture, muscle strain, herniated discs, arthritis, or lifestyle factors. Our expert physiotherapists conduct thorough assessments including movement analysis, pain evaluation, and functional testing to identify the root cause of your pain and develop targeted treatment strategies.</p>
        
        <h3>Our Evidence-Based Treatment Approach</h3>
        <p>We utilize proven techniques including manual therapy, therapeutic exercises, postural correction, spinal mobilization, and pain management strategies. Our treatment protocols are designed to not only alleviate current pain but also prevent future episodes through strengthening, flexibility improvement, and patient education on proper body mechanics.</p>
        
        <h3>Expected Outcomes & Recovery</h3>
        <p>Most patients experience significant pain reduction within 2-4 weeks of consistent treatment. Our goal is to restore your quality of life, improve functional movement, and provide you with the tools to maintain a healthy, pain-free back long-term through customized home exercise programs and lifestyle modifications.</p>
        
        <h3>Treatment Duration & Follow-up</h3>
        <p>Treatment typically ranges from 6-12 sessions depending on the severity and chronicity of the condition. We provide continuous progress monitoring, regular reassessments, and adjust treatment plans as needed to ensure optimal outcomes and prevent recurrence.</p>
      `,
    },
    'neck-pain': {
      title: 'Neck Pain / Cervical Pain Treatment',
      shortDescription: 'Specialized care for neck stiffness, cervical spine issues, tension headaches, and related musculoskeletal disorders.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Cervical Pain Management</h3>
        <p>Neck pain and cervical spine disorders can significantly impact daily activities and quality of life. Our specialized treatment protocols address muscle tension, joint dysfunction, nerve irritation, and postural imbalances that contribute to cervical pain, using advanced manual therapy techniques and targeted rehabilitation.</p>
        
        <h3>Common Conditions We Treat</h3>
        <p>We treat various neck conditions including cervical spondylosis, muscle strain, whiplash injuries, tension headaches, tech neck syndrome, and cervical disc disorders. Our approach combines evidence-based manual therapy techniques with targeted exercises, postural re-education, and ergonomic assessments.</p>
        
        <h3>Advanced Treatment Techniques</h3>
        <p>Our treatment methods include cervical mobilization, soft tissue release, trigger point therapy, neural mobilization, and specific strengthening exercises for deep cervical flexors and postural muscles. We also incorporate advanced techniques like dry needling and cupping therapy when appropriate for enhanced recovery.</p>
        
        <h3>Workplace & Lifestyle Integration</h3>
        <p>Beyond immediate pain relief, we focus on long-term prevention through comprehensive postural correction, strengthening exercises, and lifestyle modifications. We provide detailed education on proper sleeping positions, workstation setup, ergonomic principles, and daily habits that support optimal cervical health.</p>
        
        <h3>Recovery Timeline & Maintenance</h3>
        <p>Most acute neck pain conditions respond well to treatment within 4-6 weeks. Chronic conditions may require longer treatment periods, but patients typically experience progressive improvement throughout the treatment course, with maintenance programs to ensure long-term success.</p>
      `,
    },
    'slipped-disc': {
      title: 'Slipped Disc Treatment',
      shortDescription: 'Expert care for herniated discs, sciatica, disc bulges, and comprehensive spinal disc disorder management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      content: `
        <h3>Advanced Herniated Disc Rehabilitation</h3>
        <p>Slipped or herniated discs require specialized, evidence-based treatment approaches to reduce pain, restore function, and prevent further injury. Our comprehensive treatment protocols focus on reducing disc pressure, improving spinal mobility, strengthening supporting musculature, and promoting optimal healing conditions.</p>
        
        <h3>Comprehensive Assessment & Diagnosis</h3>
        <p>We conduct thorough evaluations including detailed neurological testing, movement analysis, pain assessment, and functional evaluation to determine the extent of disc involvement and develop appropriate treatment strategies. Our assessment helps differentiate between disc-related and other causes of back pain for targeted treatment.</p>
        
        <h3>Specialized Treatment Modalities</h3>
        <p>Our treatment includes spinal decompression techniques, McKenzie method exercises, core stabilization programs, neural mobilization, graduated functional training, and advanced manual therapy. We also utilize pain management techniques, postural correction, and educate patients on proper body mechanics and movement patterns.</p>
        
        <h3>Progressive Recovery Program</h3>
        <p>Treatment follows a structured, phase-based progression from acute pain reduction and inflammation control to mobility restoration, strength building, and functional reintegration. We emphasize patient education on disc health, proper lifting techniques, ergonomics, and lifestyle modifications to prevent recurrence.</p>
        
        <h3>Long-term Management & Prevention</h3>
        <p>Recovery from disc injuries typically takes 8-16 weeks depending on severity and individual factors. We provide ongoing support through maintenance exercises, periodic reassessments, lifestyle coaching, and long-term strategies to ensure optimal spinal health and prevent future episodes.</p>
      `,
    },
    'cervical-radiculopathy': {
      title: 'Cervical Radiculopathy Treatment',
      shortDescription: 'Specialized treatment for nerve compression, radiating arm pain, and cervical nerve root disorders.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      content: `
        <h3>Understanding Cervical Radiculopathy</h3>
        <p>Cervical radiculopathy occurs when nerve roots in the cervical spine become compressed or irritated, causing pain, numbness, tingling, and weakness that radiates into the shoulder, arm, and hand. Our specialized treatment approach targets both symptom relief and addressing underlying mechanical causes.</p>
        
        <h3>Comprehensive Diagnostic Approach</h3>
        <p>We perform detailed neurological examinations including reflex testing, sensory assessment, muscle strength evaluation, and specific orthopedic tests such as Spurling's test and upper limb tension tests to identify the affected nerve root and determine the most appropriate treatment strategy for each individual case.</p>
        
        <h3>Advanced Treatment Techniques</h3>
        <p>Our evidence-based treatment protocol includes cervical traction, neural mobilization techniques, soft tissue release, joint mobilization, specific strengthening exercises for deep neck flexors, and postural correction. We also incorporate pain management strategies, activity modification guidance, and patient education on condition management.</p>
        
        <h3>Neurological Recovery & Monitoring</h3>
        <p>Treatment focuses on reducing nerve compression, improving cervical spine alignment, optimizing tissue healing conditions, and promoting optimal neural recovery. We monitor neurological improvement closely through regular assessments and adjust treatment protocols based on patient response and symptom progression.</p>
        
        <h3>Functional Restoration & Prevention</h3>
        <p>Recovery typically involves gradual improvement over 6-12 weeks, with most patients experiencing significant symptom reduction. We emphasize functional restoration, return to normal activities, and provide comprehensive strategies for preventing recurrence through proper ergonomics, exercise, and lifestyle modifications.</p>
      `,
    },
    'stroke-rehabilitation': {
      title: 'Stroke Rehabilitation',
      shortDescription: 'Comprehensive rehabilitation programs for stroke recovery, neuroplasticity enhancement, and functional restoration.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Stroke Recovery Program</h3>
        <p>Stroke rehabilitation is a complex, individualized process that requires specialized expertise and evidence-based interventions. Our comprehensive programs focus on maximizing recovery potential through neuroplasticity-based treatments, functional training, and cutting-edge rehabilitation techniques tailored to each patient's specific needs and goals.</p>
        
        <h3>Multidisciplinary Assessment & Care</h3>
        <p>We provide integrated care addressing motor function, balance, coordination, mobility, and functional independence. Our team works collaboratively with other healthcare professionals including occupational therapists, speech therapists, and physicians to ensure comprehensive care that addresses all aspects of stroke recovery and community reintegration.</p>
        
        <h3>Neuroplasticity-Based Treatment Approach</h3>
        <p>Our treatment protocols leverage the brain's remarkable ability to reorganize and form new neural connections. We utilize task-specific training, repetitive practice, motor learning principles, constraint-induced movement therapy, and progressive challenges to promote optimal neuroplasticity and maximize functional recovery potential.</p>
        
        <h3>Functional Training & Real-World Application</h3>
        <p>We focus intensively on real-world activities and functional movements that are meaningful to each patient's daily life and personal goals. This includes mobility training, balance and coordination exercises, fine motor skill development, activities of daily living practice, and community mobility preparation.</p>
        
        <h3>Long-term Recovery Support & Family Involvement</h3>
        <p>Stroke recovery is an ongoing process that can continue for months or years. We provide comprehensive long-term support, extensive family and caregiver education, structured home exercise programs, community resource connections, and periodic reassessments to maximize recovery potential and maintain functional gains over time.</p>
      `,
    },
    'tennis-elbow': {
      title: 'Tennis Elbow / Golfer\'s Elbow Treatment',
      shortDescription: 'Effective treatment for lateral and medial epicondylitis, elbow tendinopathies, and overuse injuries.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Epicondylitis Treatment</h3>
        <p>Tennis elbow (lateral epicondylitis) and golfer's elbow (medial epicondylitis) are common overuse injuries affecting the tendons around the elbow joint. Our evidence-based treatment approach addresses pain reduction, inflammation control, tissue healing, and underlying biomechanical factors contributing to the condition.</p>
        
        <h3>Detailed Biomechanical Assessment</h3>
        <p>We conduct thorough evaluations of arm and shoulder mechanics, grip strength testing, range of motion assessment, and detailed analysis of movement patterns to identify contributing factors such as muscle imbalances, poor technique, or equipment issues. This comprehensive assessment guides our treatment planning and helps prevent recurrence.</p>
        
        <h3>Evidence-Based Treatment Interventions</h3>
        <p>Our treatment includes progressive eccentric strengthening exercises, manual therapy techniques including soft tissue mobilization and joint mobilization, activity modification protocols, and gradual return to function programs. We also incorporate ergonomic education, technique modification for sports and occupational activities, and equipment recommendations.</p>
        
        <h3>Progressive Loading & Strengthening Program</h3>
        <p>Treatment follows a carefully structured progression from initial pain management and tissue protection to progressive loading, strength building, and functional restoration. We emphasize patient education on proper technique, load management principles, and gradual activity progression to ensure safe healing and prevent re-injury.</p>
        
        <h3>Return to Activity & Long-term Prevention</h3>
        <p>Most patients experience significant improvement within 6-12 weeks of consistent, progressive treatment. We provide sport-specific or work-specific training protocols to ensure safe return to previous activity levels, along with ongoing strategies to reduce the risk of recurrence and maintain optimal elbow health.</p>
      `,
    },
    'gait-training': {
      title: 'Gait Training',
      shortDescription: 'Specialized walking rehabilitation, mobility improvement programs, and balance enhancement therapy.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      content: `
        <h3>Advanced Gait Analysis & Training</h3>
        <p>Gait training is essential for individuals recovering from neurological conditions, orthopedic injuries, or those experiencing walking difficulties due to various medical conditions. Our comprehensive approach includes detailed gait analysis, biomechanical assessment, and individualized training programs to restore optimal walking patterns and improve functional mobility.</p>
        
        <h3>Comprehensive Assessment Techniques</h3>
        <p>We utilize advanced video gait analysis, balance assessments, strength testing, range of motion evaluation, and functional mobility tests to identify specific gait deviations and underlying impairments. This detailed analysis guides our treatment planning, helps set realistic goals, and enables precise progress monitoring throughout the rehabilitation process.</p>
        
        <h3>Progressive Training Methods & Techniques</h3>
        <p>Our gait training programs include pre-gait activities, supported walking practice using various assistive devices, balance and coordination training, proprioceptive exercises, and advanced mobility challenges. We utilize treadmill training, parallel bars, balance training equipment, and functional electrical stimulation when appropriate to facilitate safe and effective learning.</p>
        
        <h3>Balance & Coordination Enhancement</h3>
        <p>We address underlying balance deficits, coordination problems, and strength imbalances that contribute to gait abnormalities. Our treatment includes specific exercises to improve proprioception, muscle timing, weight shifting, postural control, and movement coordination to enhance overall walking safety and efficiency.</p>
        
        <h3>Functional Independence & Community Mobility</h3>
        <p>The ultimate goal of gait training is to achieve the highest level of functional mobility possible for each individual. We work systematically toward independent walking, improved safety in various environments, enhanced confidence, and better quality of life through structured, progressive training programs tailored to individual needs and goals.</p>
      `,
    },
    'postural-correction': {
      title: 'Postural Correction Exercises',
      shortDescription: 'Comprehensive programs to improve posture, prevent musculoskeletal problems, and enhance spinal alignment.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Postural Assessment & Correction</h3>
        <p>Poor posture is a leading cause of musculoskeletal pain and dysfunction in modern society, contributing to neck pain, back pain, headaches, and reduced quality of life. Our comprehensive postural correction programs address muscle imbalances, joint restrictions, movement patterns, and lifestyle factors that contribute to postural problems.</p>
        
        <h3>Advanced Postural Analysis Techniques</h3>
        <p>We conduct detailed postural assessments including photographic postural analysis, flexibility testing, strength evaluation, movement screening, and ergonomic assessment to identify specific postural deviations and their underlying causes. This forms the foundation of individualized treatment plans tailored to each patient's specific needs.</p>
        
        <h3>Targeted Exercise & Manual Therapy Programs</h3>
        <p>Our treatment includes specific strengthening exercises for weakened postural muscles, comprehensive stretching programs for tight structures, manual therapy for joint restrictions, and movement re-education to establish proper postural habits. We focus on both static postural control and dynamic movement patterns throughout daily activities.</p>
        
        <h3>Ergonomic Education & Environmental Modification</h3>
        <p>We provide comprehensive education on workplace ergonomics, proper lifting techniques, optimal sleeping positions, and modifications to daily activities that support good posture. Environmental modifications, ergonomic equipment recommendations, and workstation assessments are integral parts of our holistic treatment approach.</p>
        
        <h3>Long-term Postural Health & Maintenance</h3>
        <p>Postural correction is an ongoing process that requires consistent effort, habit modification, and lifestyle changes. We provide practical tools and strategies for maintaining proper posture throughout daily activities, ongoing exercise programs, and offer regular follow-up support to ensure long-term success and prevent regression.</p>
      `,
    },
    'neuro-rehabilitation': {
      title: 'Neuro Rehabilitation',
      shortDescription: 'Specialized rehabilitation for neurological conditions, brain injuries, and nervous system disorders.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Neurological Rehabilitation</h3>
        <p>Neurological rehabilitation addresses impairments resulting from conditions affecting the central and peripheral nervous systems. Our specialized programs focus on maximizing functional recovery, promoting neuroplasticity, improving quality of life, and enhancing independence for individuals with various neurological conditions including stroke, brain injury, spinal cord injury, and neurodegenerative diseases.</p>
        
        <h3>Comprehensive Neurological Assessment</h3>
        <p>We conduct thorough neurological assessments including motor function testing, sensory evaluation, balance and coordination assessment, cognitive screening, and functional evaluation to develop individualized treatment plans that address specific impairments, functional limitations, and personal goals for each patient.</p>
        
        <h3>Evidence-Based Treatment Interventions</h3>
        <p>Our treatment approaches include motor learning principles, task-specific training, balance and coordination exercises, strength training, gait training, functional mobility practice, and neuromuscular re-education. We utilize cutting-edge techniques including constraint-induced movement therapy, functional electrical stimulation, and technology-assisted rehabilitation to promote optimal neural recovery.</p>
        
        <h3>Adaptive Strategies & Compensatory Techniques</h3>
        <p>We teach compensatory strategies and adaptive techniques to help patients maximize independence despite persistent impairments. This includes assistive device training, environmental modifications, energy conservation techniques, safety education, and comprehensive caregiver training to ensure optimal outcomes and quality of life.</p>
        
        <h3>Interdisciplinary Collaboration & Long-term Support</h3>
        <p>Neurological rehabilitation requires a comprehensive team approach. We work closely with occupational therapists, speech therapists, physicians, psychologists, and other healthcare professionals, along with family members and caregivers, to ensure holistic care that addresses all aspects of recovery, community reintegration, and long-term wellness.</p>
      `,
    },
    'frozen-shoulder': {
      title: 'Frozen Shoulder Treatment',
      shortDescription: 'Effective treatment for adhesive capsulitis, shoulder stiffness, and mobility restoration programs.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Adhesive Capsulitis Treatment</h3>
        <p>Frozen shoulder, or adhesive capsulitis, is a painful and limiting condition characterized by progressive loss of shoulder mobility and function. Our evidence-based treatment approach addresses pain management, mobility restoration, functional recovery, and long-term shoulder health through specialized interventions tailored to each stage of the condition.</p>
        
        <h3>Stage-Specific Treatment Protocols</h3>
        <p>Frozen shoulder progresses through three distinct stages: freezing (painful), frozen (stiff), and thawing (recovery). Our treatment is carefully tailored to each phase, adjusting our approach and techniques based on the patient's current stage, pain levels, and functional limitations to optimize outcomes and minimize discomfort.</p>
        
        <h3>Advanced Manual Therapy Techniques</h3>
        <p>We utilize specialized manual therapy techniques including gentle joint mobilization, capsular stretching, soft tissue release, trigger point therapy, and myofascial release to address capsular restrictions and improve shoulder mobility. These techniques are carefully graded based on patient tolerance, stage of condition, and treatment response.</p>
        
        <h3>Progressive Exercise & Mobility Program</h3>
        <p>Our exercise programs include range of motion exercises, gentle stretching protocols, pendulum exercises, wall slides, and progressive strengthening activities designed to restore shoulder function while managing pain. We provide both supervised clinic-based treatment and comprehensive home exercise programs for optimal recovery.</p>
        
        <h3>Recovery Timeline & Long-term Management</h3>
        <p>Recovery from frozen shoulder typically takes 12-24 months, but physiotherapy can significantly reduce pain, improve outcomes, and accelerate recovery. We provide ongoing education on condition management, pain relief strategies, activity modification, and comprehensive approaches to prevent complications or recurrence.</p>
      `,
    },
    'cupping-therapy': {
      title: 'Cupping Therapy (Dry/Wet Cupping)',
      shortDescription: 'Traditional cupping therapy for pain relief, improved circulation, and tissue healing enhancement.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      content: `
        <h3>Traditional Cupping Therapy Integration</h3>
        <p>Cupping therapy is an ancient healing practice that has gained modern recognition for its effectiveness in pain management, tissue healing, and circulatory improvement. We offer both dry and wet cupping techniques as part of our comprehensive, integrative treatment approach, combining traditional wisdom with modern physiotherapy practices.</p>
        
        <h3>Dry Cupping Benefits & Applications</h3>
        <p>Dry cupping involves creating controlled suction on the skin to improve blood circulation, reduce muscle tension, promote tissue healing, and provide pain relief. This technique is particularly effective for treating muscle pain, joint stiffness, fascial restrictions, and improving recovery from sports injuries and overuse conditions.</p>
        
        <h3>Wet Cupping Technique & Therapeutic Effects</h3>
        <p>Wet cupping combines the benefits of dry cupping with controlled, superficial micro-incisions to enhance the therapeutic effect and promote detoxification. This specialized technique is used for specific conditions and requires advanced training, sterile techniques, and careful patient selection for safe and effective application.</p>
        
        <h3>Safety Protocols & Evidence-Based Practice</h3>
        <p>All cupping treatments are performed by certified practitioners using sterile, single-use equipment and following strict safety protocols. We carefully screen patients for contraindications, provide thorough education about the treatment process, expected outcomes, and post-treatment care to ensure optimal safety and therapeutic benefits.</p>
        
        <h3>Integration with Physiotherapy Treatment</h3>
        <p>Cupping therapy is often strategically combined with other physiotherapy treatments including manual therapy, therapeutic exercise, and movement re-education to enhance overall treatment effectiveness. We integrate cupping with comprehensive rehabilitation programs for optimal patient outcomes and accelerated recovery.</p>
      `,
    },
    'dry-needling': {
      title: 'Dry Needling Therapy',
      shortDescription: 'Advanced trigger point therapy for muscle pain, tension relief, and neuromuscular dysfunction treatment.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      content: `
        <h3>Advanced Trigger Point Dry Needling</h3>
        <p>Dry needling is a highly effective, evidence-based treatment technique that uses thin, sterile needles to target myofascial trigger points and tight muscle bands. This advanced intervention provides rapid pain relief, improved muscle function, enhanced tissue healing, and restoration of normal movement patterns for various musculoskeletal conditions.</p>
        
        <h3>Scientific Foundation & Mechanisms</h3>
        <p>Dry needling is based on modern understanding of anatomy, neurophysiology, and pain science. The technique specifically targets myofascial trigger points, which are hyperirritable spots in skeletal muscle that can cause local and referred pain patterns, muscle dysfunction, and movement restrictions, promoting healing through various physiological mechanisms.</p>
        
        <h3>Treatment Applications & Conditions</h3>
        <p>We use dry needling to effectively treat various conditions including chronic muscle pain, tension headaches, neck and back pain, shoulder impingement, tennis elbow, joint dysfunction, sports injuries, and postural dysfunction. The technique is particularly effective for addressing chronic muscle tension, movement restrictions, and pain that hasn't responded to other treatments.</p>
        
        <h3>Safety Excellence & Professional Standards</h3>
        <p>All dry needling treatments are performed by extensively trained, certified practitioners with advanced education in anatomy, needle safety, and needling techniques. We follow strict safety protocols, use sterile single-use needles, maintain optimal hygiene standards, and carefully screen patients to ensure safety and optimal therapeutic outcomes.</p>
        
        <h3>Integrated Treatment & Comprehensive Care</h3>
        <p>Dry needling is most effective when strategically combined with other physiotherapy treatments including manual therapy, therapeutic exercise, movement re-education, and postural correction. We develop comprehensive, integrated treatment plans that maximize the benefits of this powerful technique while addressing all aspects of the patient's condition for optimal recovery.</p>
      `,
    },
  };

  /**
   * Opens the modal with the selected treatment details.
   * @param {string} treatmentKey - The key of the treatment to display.
   */
  const openModal = (treatmentKey) => {
    const selectedTreatmentData = treatmentData[treatmentKey];
    if (selectedTreatmentData) {
      setSelectedTreatment(selectedTreatmentData);
      setIsModalOpen(true);
    }
  };

  /**
   * Closes the modal with a delay to allow animation completion.
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedTreatment(null);
    }, 300); // Wait for animation to complete
  };

  /**
   * TreatmentCard Component
   * 
   * A reusable component for rendering individual treatment cards.
   * @param {Object} props - Component props including treatmentKey, treatment, and index.
   * @returns {JSX.Element} The rendered treatment card.
   */
  const TreatmentCard = ({ treatmentKey, treatment, index }) => {
    /**
     * Determines the appropriate icon for a given treatment based on its key.
     * @param {string} key - The treatment key.
     * @returns {React.Component} The LucideReact icon component.
     */
    const getAppropriateIcon = (key) => {
      const iconMapping = {
        'back-pain': Heart,
        'neck-pain': Heart,
        'slipped-disc': Heart,
        'cervical-radiculopathy': Heart,
        'stroke-rehabilitation': Users,
        'tennis-elbow': Star,
        'gait-training': Clock,
        'postural-correction': Award,
        'neuro-rehabilitation': Users,
        'frozen-shoulder': Star,
        'cupping-therapy': Heart,
        'dry-needling': Star,
      };
      const IconComponent = iconMapping[key] || Heart;
      return <IconComponent className="w-8 h-8 text-white" />;
    };

    return (
      <article
        ref={(element) => (treatmentReferences.current[index] = element)}
        data-id={`treatment-${index}`}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-teal-200"
        onClick={() => openModal(treatmentKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openModal(treatmentKey);
          }
        }}
        aria-label={`Learn more about ${treatment.title}`}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 p-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 mb-6">
            {getAppropriateIcon(treatmentKey)}
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
            {treatment.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {treatment.shortDescription}
          </p>

          {/* CTA Button */}
          <div className="flex items-center text-teal-600 font-semibold group-hover:text-blue-600 transition-colors duration-300">
            <span>Learn More</span>
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      </article>
    );
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Particle Animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-20 w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-16 w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-40 animate-float delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full opacity-60 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full opacity-50 animate-float delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section */}
          <header 
          ref={sectionReference}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            visibleElements['section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Heart className="w-5 h-5 animate-pulse" />
            <span>Expert Care</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {' '}Physiotherapy Treatments
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, evidence-based physiotherapy treatments delivered by expert practitioners, designed to restore function, relieve pain, and enhance your quality of life.
          </p>
        </header>

        {/* Statistics Section */}
        {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  visibleElements['section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </section> */}

        {/* Treatments Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={sectionReference} data-id="section">
          {Object.entries(treatmentData).map(([key, treatment], index) => (
            <TreatmentCard key={key} treatmentKey={key} treatment={treatment} index={index} />
          ))}
        </main>

        {/* CTA Section */}
        <section className="mt-16 text-center py-12 bg-teal-50 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a pain-free life with our expert physiotherapy services. Book a consultation today!
          </p>
          <button
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            onClick={() => alert('Booking functionality would be implemented here')}
            aria-label="Book a consultation"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Now
          </button>
        </section>
      </div>

      {/* Treatment Detail Modal */}
      {isModalOpen && selectedTreatment && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop with blur effect */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                closeModal();
              }
            }}
            aria-label="Close modal"
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-3xl md:text-4xl font-bold pr-16">
                {selectedTreatment.title}
              </h2>
              <div className="absolute -bottom-6 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Treatment Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden">
                <img
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Treatment Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedTreatment.content }}
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Treatments
                </button>
                <button
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  onClick={() => {
                    alert('Booking functionality would be implemented here');
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 0.5; }
        }

        @keyframes modal-slide-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }

        .animate-modal-slide-in {
          animation: modal-slide-in 0.3s ease forwards;
        }

        .prose h3 {
          color: #2563eb;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #374151;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }

          .max-w-4xl {
            max-width: calc(100vw - 2rem);
          }

          .p-8 {
            padding: 1.5rem;
          }

          .text-3xl.md\\:text-4xl {
            font-size: 2rem;
          }

          .text-4xl.md\\:text-5xl {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .text-4xl.md\\:text-5xl {
            font-size: 2rem;
          }

          .p-8 {
            padding: 1rem;
          }

          .gap-8 {
            gap: 1.5rem;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #2563eb, #10b981);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1d4ed8, #059669);
        }

        /* Focus styles for accessibility */
        button:focus-visible,
        [role="button"]:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* Reduced motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-modal-slide-in {
            animation: none;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-gradient-to-r {
            background: #000;
          }

          .text-gray-600 {
            color: #000;
          }

          .border-transparent {
            border-color: #000;
          }
        }

        /* Print styles */
        @media print {
          .fixed,
          .animate-float,
          button {
            display: none;
          }

          .bg-gradient-to-b,
          .bg-gradient-to-r {
            background: #fff;
            color: #000;
          }
        }
      `}</style>
    </div>
  );
};

export default PhysioTreatments;