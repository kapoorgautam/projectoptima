

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ArrowLeft, Phone, Heart, Clock, Users, Award, Star } from 'lucide-react';
import throttle from 'lodash.throttle';

const PhysioTreatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState({});
  const sectionReference = useRef(null);
  const treatmentReferences = useRef([]);

  useEffect(() => {
    treatmentReferences.current = Array(Object.keys(treatmentData).length).fill(null);

    const throttledObserver = throttle((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.id) {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.dataset.id]: true,
          }));
        }
      });
    }, 100);

    const observer = new IntersectionObserver(throttledObserver, {
      threshold: 0.1,
      rootMargin: '100px',
    });

    if (sectionReference.current) {
      sectionReference.current.dataset.id = 'section';
      observer.observe(sectionReference.current);
    }

    treatmentReferences.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `treatment-${index}`;
        observer.observe(ref);
      }
    });

    const timeout = setTimeout(() => {
      setVisibleElements((prev) => {
        const newState = { ...prev, section: true };
        treatmentReferences.current.forEach((_, index) => {
          newState[`treatment-${index}`] = true;
        });
        return newState;
      });
    }, 2000);

    return () => {
      if (sectionReference.current) observer.unobserve(sectionReference.current);
      treatmentReferences.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      clearTimeout(timeout);
    };
  }, []);

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

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isModalOpen]);

  const treatmentData = {
    'back-pain': {
      title: 'Back Pain / Stiff Back Treatment',
      shortDescription: 'Relieve lower back pain and stiffness with IASTM, cupping, and manual therapy for lasting recovery.',
      image: 'https://media.istockphoto.com/id/1093541020/photo/doctor-consulting-with-patient-back-problems-physical-therapy-concept.jpg?s=612x612&w=0&k=20&c=viczYSSEm9qkUBu-I4nHDTsH56DjcjBIjz2NMv4LLbE=',
      content: `
        <h3>Advanced Back Pain Management</h3>
        <p>At Optima Physio Care, led by Dr. Nikhil Kapoor, we address acute and chronic back pain using evidence-based techniques like IASTM, cupping therapy, and spinal mobilization. Our personalized plans focus on pain relief, mobility restoration, and long-term spinal health.</p>
        <h3>Causes & Comprehensive Assessment</h3>
        <p>Back pain may stem from poor posture, muscle strain, or disc issues. Our expert assessments include movement analysis, postural evaluation, and functional testing to pinpoint causes and tailor treatments, ensuring effective pain management and prevention.</p>
        <h3>Specialized Treatment Techniques</h3>
        <p>We employ manual therapy, therapeutic exercises, and advanced modalities like dry needling. Dr. Nikhil Kapoor’s expertise, honed at Jivisha Advanced Medical Centre, ensures precise interventions to reduce pain and enhance spinal alignment.</p>
        <h3>Recovery & Prevention</h3>
        <p>Patients typically see significant improvement within 2-4 weeks. Our programs include customized home exercises and lifestyle advice to prevent recurrence, drawing on Dr. Kapoor’s experience with musculoskeletal rehabilitation.</p>
        <h3>Treatment Plan</h3>
        <p>Expect 6-12 sessions based on condition severity. We monitor progress closely, adjusting plans to optimize outcomes, ensuring you return to daily activities with improved mobility and reduced pain.</p>
      `,
      link: '/treatments/back-pain',
    },
    'neck-pain': {
      title: 'Neck Pain / Cervical Pain Treatment',
      shortDescription: 'Target neck stiffness and cervical issues with manual therapy, dry needling, and postural correction.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop',
      content: `
        <h3>Expert Cervical Pain Relief</h3>
        <p>Optima Physio Care, under Dr. Nikhil Kapoor, offers specialized care for neck pain using advanced techniques like dry needling, cupping, and cervical mobilization to alleviate tension and restore function.</p>
        <h3>Conditions & Assessment</h3>
        <p>We treat cervical spondylosis, tech neck, and tension headaches. Our thorough assessments evaluate posture, movement, and muscle tension to create targeted treatment plans for effective relief.</p>
        <h3>Advanced Techniques</h3>
        <p>Our methods include soft tissue release, trigger point therapy, and strengthening exercises for cervical muscles, enhanced by Dr. Kapoor’s expertise in manual therapy from Khelo India Youth Games 2023.</p>
        <h3>Lifestyle Integration</h3>
        <p>We provide ergonomic advice and postural correction to prevent recurrence, ensuring long-term cervical health through tailored home exercises and daily habit adjustments.</p>
        <h3>Recovery Timeline</h3>
        <p>Acute neck pain often improves within 4-6 weeks. Chronic cases benefit from ongoing support, with Dr. Kapoor’s personalized plans ensuring progressive recovery and sustained results.</p>
      `,
      link: '/treatments/neck-pain',
    },
    'slipped-disc': {
      title: 'Slipped Disc Treatment',
      shortDescription: 'Manage herniated discs and sciatica with spinal decompression, IASTM, and core stabilization.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      content: `
        <h3>Specialized Disc Rehabilitation</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care provides expert treatment for slipped discs using spinal decompression, IASTM, and manual therapy to reduce pain and restore spinal function.</p>
        <h3>Assessment & Diagnosis</h3>
        <p>Our detailed evaluations include neurological testing and movement analysis to assess disc involvement, ensuring precise treatment plans tailored to your condition.</p>
        <h3>Treatment Modalities</h3>
        <p>We use McKenzie method exercises, core stabilization, and neural mobilization, leveraging Dr. Kapoor’s musculoskeletal expertise to promote healing and reduce disc pressure.</p>
        <h3>Recovery Program</h3>
        <p>Our phase-based approach progresses from pain relief to strength building, typically spanning 8-16 weeks, with patient education on proper body mechanics to prevent recurrence.</p>
        <h3>Long-term Health</h3>
        <p>We offer maintenance exercises and lifestyle coaching to ensure lasting spinal health, drawing on Dr. Kapoor’s experience at Jivisha Advanced Medical Centre.</p>
      `,
      link: '/treatments/slipped-disc',
    },
    'cervical-radiculopathy': {
      title: 'Cervical Radiculopathy Treatment',
      shortDescription: 'Relieve nerve compression and arm pain with cervical traction and neural mobilization.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      content: `
        <h3>Targeted Nerve Pain Relief</h3>
        <p>Optima Physio Care, led by Dr. Nikhil Kapoor, treats cervical radiculopathy with cervical traction, neural mobilization, and manual therapy to alleviate radiating pain and restore function.</p>
        <h3>Diagnostic Approach</h3>
        <p>We conduct neurological exams, including Spurling’s test, to identify affected nerve roots, ensuring precise treatment plans tailored to your symptoms.</p>
        <h3>Treatment Techniques</h3>
        <p>Our protocols include joint mobilization, dry needling, and strengthening exercises, enhanced by Dr. Kapoor’s expertise in peripheral nerve injury rehabilitation.</p>
        <h3>Recovery Monitoring</h3>
        <p>Most patients see improvement within 6-12 weeks. We monitor neurological progress and adjust treatments to optimize recovery and reduce nerve compression.</p>
        <h3>Prevention Strategies</h3>
        <p>We provide ergonomic guidance and exercises to prevent recurrence, ensuring long-term cervical health with Dr. Kapoor’s evidence-based approach.</p>
      `,
      link: '/treatments/cervical-radiculopathy',
    },
    'stroke-rehabilitation': {
      title: 'Stroke Rehabilitation',
      shortDescription: 'Enhance neuroplasticity and function with task-specific training and mobility programs.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
      content: `
        <h3>Comprehensive Stroke Recovery</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care offers tailored stroke rehabilitation, focusing on neuroplasticity and functional restoration through evidence-based techniques.</p>
        <h3>Multidisciplinary Care</h3>
        <p>Our assessments cover motor function, balance, and mobility, collaborating with other specialists to create holistic recovery plans addressing individual needs.</p>
        <h3>Neuroplasticity Techniques</h3>
        <p>We use task-specific training, constraint-induced movement therapy, and balance exercises, leveraging Dr. Kapoor’s neurological rehabilitation expertise.</p>
        <h3>Functional Training</h3>
        <p>Our programs focus on real-world activities, enhancing mobility and independence, with tailored exercises to support daily living and community reintegration.</p>
        <h3>Long-term Support</h3>
        <p>Recovery may span months, with ongoing support, family education, and home exercise programs to maximize functional gains and quality of life.</p>
      `,
      link: '/treatments/stroke-rehabilitation',
    },
    'tennis-elbow': {
      title: "Tennis Elbow / Golfer's Elbow Treatment",
      shortDescription: 'Treat elbow tendinopathies with eccentric exercises, IASTM, and manual therapy.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop',
      content: `
        <h3>Expert Elbow Pain Relief</h3>
        <p>Optima Physio Care, under Dr. Nikhil Kapoor, treats tennis and golfer’s elbow with IASTM, eccentric exercises, and manual therapy for effective pain relief and recovery.</p>
        <h3>Biomechanical Assessment</h3>
        <p>We evaluate arm mechanics and grip strength to identify causes like muscle imbalances, ensuring targeted treatment plans to address root issues.</p>
        <h3>Treatment Interventions</h3>
        <p>Our methods include soft tissue mobilization, dry needling, and progressive strengthening, drawing on Dr. Kapoor’s sports injury expertise from Khelo India 2023.</p>
        <h3>Progressive Recovery</h3>
        <p>Improvement typically occurs within 6-12 weeks, with structured programs to restore function and prevent re-injury through proper technique.</p>
        <h3>Prevention Strategies</h3>
        <p>We provide ergonomic advice and sport-specific training to ensure safe return to activities and long-term elbow health.</p>
      `,
      link: '/treatments/tennis-elbow',
    },
    'gait-training': {
      title: 'Gait Training',
      shortDescription: 'Improve walking and balance with video gait analysis and mobility exercises.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      content: `
        <h3>Advanced Gait Rehabilitation</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care enhances mobility through gait training, using video analysis and balance exercises for neurological and orthopedic conditions.</p>
        <h3>Comprehensive Assessment</h3>
        <p>We use video gait analysis and balance testing to identify deviations, creating tailored plans to improve walking patterns and safety.</p>
        <h3>Training Methods</h3>
        <p>Our programs include supported walking, proprioceptive exercises, and treadmill training, leveraging Dr. Kapoor’s expertise in functional mobility.</p>
        <h3>Balance Enhancement</h3>
        <p>We address balance deficits with coordination exercises and postural control training to enhance walking efficiency and reduce fall risk.</p>
        <h3>Functional Mobility</h3>
        <p>Our goal is independent walking and community mobility, with customized plans to improve confidence and quality of life.</p>
      `,
      link: '/treatments/gait-training',
    },
    'postural-correction': {
      title: 'Postural Correction Exercises',
      shortDescription: 'Enhance posture and spinal alignment with targeted exercises and manual therapy.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      content: `
        <h3>Expert Postural Correction</h3>
        <p>Optima Physio Care, led by Dr. Nikhil Kapoor, addresses postural issues with manual therapy and exercises to prevent pain and improve alignment.</p>
        <h3>Postural Analysis</h3>
        <p>Our photographic analysis and movement screening identify deviations, guiding personalized treatment plans to correct posture.</p>
        <h3>Treatment Programs</h3>
        <p>We use strengthening exercises, stretching, and IASTM, leveraging Dr. Kapoor’s expertise in postural assessment for effective results.</p>
        <h3>Ergonomic Education</h3>
        <p>We provide guidance on workplace ergonomics and daily habits to support posture, ensuring long-term spinal health.</p>
        <h3>Long-term Maintenance</h3>
        <p>Postural correction requires ongoing effort. Our home exercise programs and follow-ups ensure sustained improvements.</p>
      `,
      link: '/treatments/postural-correction',
    },
    'neuro-rehabilitation': {
      title: 'Neuro Rehabilitation',
      shortDescription: 'Restore function for neurological conditions with motor learning and task-specific training.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      content: `
        <h3>Specialized Neuro Rehabilitation</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care offers neuro rehabilitation for stroke, brain injuries, and nerve disorders, focusing on functional recovery.</p>
        <h3>Neurological Assessment</h3>
        <p>We assess motor function, balance, and coordination to create individualized plans addressing specific neurological impairments.</p>
        <h3>Treatment Approaches</h3>
        <p>Our methods include task-specific training, functional electrical stimulation, and gait exercises, leveraging Dr. Kapoor’s expertise in peripheral nerve injuries.</p>
        <h3>Adaptive Strategies</h3>
        <p>We teach compensatory techniques and provide assistive device training to maximize independence and safety.</p>
        <h3>Holistic Support</h3>
        <p>Collaborating with specialists, we offer long-term support and caregiver education to enhance recovery and quality of life.</p>
      `,
      link: '/treatments/neuro-rehabilitation',
    },
    'frozen-shoulder': {
      title: 'Frozen Shoulder Treatment',
      shortDescription: 'Restore shoulder mobility with manual therapy, IASTM, and progressive exercises.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      content: `
        <h3>Effective Frozen Shoulder Care</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care treats frozen shoulder with IASTM, manual therapy, and tailored exercises to restore mobility and reduce pain.</p>
        <h3>Stage-Specific Care</h3>
        <p>We tailor treatments to the freezing, frozen, and thawing stages, adjusting techniques based on pain and mobility levels.</p>
        <h3>Manual Therapy</h3>
        <p>Our methods include joint mobilization, capsular stretching, and myofascial release, leveraging Dr. Kapoor’s musculoskeletal expertise.</p>
        <h3>Exercise Programs</h3>
        <p>We provide range of motion exercises and strengthening programs to accelerate recovery, typically spanning 12-24 months.</p>
        <h3>Long-term Health</h3>
        <p>Our education and home exercises prevent complications, ensuring sustained shoulder function and pain relief.</p>
      `,
      link: '/treatments/frozen-shoulder',
    },
    'cupping-therapy': {
      title: 'Cupping Therapy (Dry/Wet Cupping)',
      shortDescription: 'Enhance healing with dry and wet cupping for pain relief and circulation.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      content: `
        <h3>Integrated Cupping Therapy</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care uses dry and wet cupping to relieve pain, improve circulation, and enhance tissue healing, integrated with physiotherapy.</p>
        <h3>Dry Cupping Benefits</h3>
        <p>Dry cupping reduces muscle tension and promotes recovery, ideal for sports injuries and joint stiffness, using controlled suction.</p>
        <h3>Wet Cupping Techniques</h3>
        <p>Wet cupping enhances therapeutic effects with sterile micro-incisions, performed by Dr. Kapoor with advanced training for safety.</p>
        <h3>Safety Standards</h3>
        <p>We use sterile, single-use equipment and screen for contraindications, ensuring safe and effective treatments.</p>
        <h3>Comprehensive Integration</h3>
        <p>Cupping is combined with manual therapy and exercises for optimal outcomes, leveraging Dr. Kapoor’s expertise from Khelo India 2023.</p>
      `,
      link: '/treatments/cupping-therapy',
    },
    'dry-needling': {
      title: 'Dry Needling Therapy',
      shortDescription: 'Target trigger points with dry needling for rapid pain relief and muscle recovery.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      content: `
        <h3>Advanced Dry Needling</h3>
        <p>Dr. Nikhil Kapoor at Optima Physio Care uses dry needling to treat muscle pain and dysfunction, targeting trigger points for rapid relief.</p>
        <h3>Scientific Approach</h3>
        <p>Based on pain science, dry needling addresses myofascial trigger points to improve muscle function and movement, using sterile needles.</p>
        <h3>Applications</h3>
        <p>Effective for neck pain, sports injuries, and chronic tension, leveraging Dr. Kapoor’s expertise in musculoskeletal care.</p>
        <h3>Safety Protocols</h3>
        <p>Performed by certified practitioners with strict hygiene standards, ensuring safe and effective treatment outcomes.</p>
        <h3>Integrated Care</h3>
        <p>Combined with manual therapy and exercises, dry needling enhances recovery, supported by Dr. Kapoor’s evidence-based practice.</p>
      `,
      link: '/treatments/dry-needling',
    },
  };

  const openModal = (treatmentKey) => {
    const selectedTreatmentData = treatmentData[treatmentKey];
    if (selectedTreatmentData) {
      setSelectedTreatment(selectedTreatmentData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedTreatment(null);
    }, 300);
  };

  const TreatmentCard = ({ treatmentKey, treatment, index }) => {
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
        ref={(el) => (treatmentReferences.current[index] = el)}
        data-id={`treatment-${index}`}
        className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-teal-200 transform transition-all duration-300`}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 p-6 sm:p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 mb-6">
            {getAppropriateIcon(treatmentKey)}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
            {treatment.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {treatment.shortDescription}
          </p>
          <a
          
            className="flex items-center text-teal-600 font-semibold group-hover:text-blue-600 transition-colors duration-300"
            aria-label={`Learn more about ${treatment.title}`}
            onClick={(event) => {
              event.preventDefault();
              openModal(treatmentKey);
            }}
          >
            <span>Learn More</span>
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 hidden md:block" />
      </article>
    );
  };

  return (
    <div className="relative py-12 sm:py-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Helmet>
        <title>Physiotherapy Treatments - Optima Physio Care | Expert Rehabilitation in Delhi NCR</title>
        <meta
          name="description"
          content="Explore specialized physiotherapy treatments at Optima Physio Care, led by Dr. Nikhil Kapoor, for back pain, neck pain, sports injuries, and neuro rehabilitation in Delhi NCR."
        />
        <meta
          name="keywords"
          content="Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, sports injury treatment, back pain relief, neuro rehabilitation, dry needling, cupping therapy"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta property="og:title" content="Physiotherapy Treatments - Optima Physio Care" />
        <meta
          property="og:description"
          content="Discover expert physiotherapy treatments at Optima Physio Care, led by Dr. Nikhil Kapoor, for pain relief and functional restoration in Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.optimaphysiocare.in/treatments" />
        <meta property="og:image" content="https://www.optimaphysiocare.in/images/treatments-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Physiotherapy Treatments - Optima Physio Care" />
        <meta
          name="twitter:description"
          content="Specialized physiotherapy treatments for back pain, sports injuries, and neuro rehabilitation at Optima Physio Care in Delhi NCR."
        />
        <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/treatments-og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'Optima Physio Care',
            url: 'https://www.optimaphysiocare.in',
            description:
              'Optima Physio Care, led by Dr. Nikhil Kapoor, offers specialized physiotherapy treatments in Delhi NCR for sports injuries, back pain, neuro rehabilitation, and more.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              postalCode: '110041',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-8447646815',
              contactType: 'Customer Service',
              email: 'nikhilkapoor9540@gmail.com',
            },
            employee: {
              '@type': 'Person',
              name: 'Dr. Nikhil Kapoor',
              jobTitle: 'Physiotherapist',
              description: 'Expert in sports physiotherapy, manual therapy, and onco-care rehabilitation.',
            },
            sameAs: [
              'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
              'https://www.facebook.com/people/optima-physio-care/100094770625926/',
              'https://www.instagram.com/optimaphysiocare/',
            ],
            medicalService: Object.values(treatmentData).map((treatment) => ({
              '@type': 'MedicalProcedure',
              name: treatment.title,
              description: treatment.shortDescription,
            })),
          })}
        </script>
      </Helmet>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
        <div className="absolute top-10 left-20 w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-16 w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <header
          ref={sectionReference}
          className={`text-center mb-12 transform transition-all duration-1000 ${
            visibleElements['section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Expert Care</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Specialized
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Physiotherapy Treatments</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Optima Physio Care, led by Dr. Nikhil Kapoor, delivers evidence-based physiotherapy treatments in Delhi NCR, specializing in sports injuries, pain relief, and neuro rehabilitation.
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(treatmentData).map(([key, treatment], index) => (
            <TreatmentCard key={key} treatmentKey={key} treatment={treatment} index={index} />
          ))}
        </main>

        <section className="mt-12 sm:mt-16 text-center py-8 sm:py-12 bg-teal-50 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 sm:mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact Optima Physio Care today to schedule your consultation with Dr. Nikhil Kapoor and begin your journey to pain-free living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91-8447646815"
              className="flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
              aria-label="Book a physiotherapy consultation with Dr. Nikhil Kapoor"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Now
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Contact Optima Physio Care"
            >
              Contact Us
            </a>
          </div>
        
        </section>
      </div>

      {isModalOpen && selectedTreatment && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/80"
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
          <div className="relative w-full max-w-3xl max-h-[85vh] mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 sm:p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X className="h-5 sm:h-6 w-5 sm:w-6" />
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold pr-12 sm:pr-16">{selectedTreatment.title}</h2>
              <div className="absolute -bottom-4 sm:-bottom-6 left-6 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-5 sm:h-6 w-5 sm:h-6 text-teal-600" />
              </div>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(85vh-180px)]">
              <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden">
                <img
                  src={selectedTreatment.image}
                  alt={`Image of ${selectedTreatment.title} at Optima Physio Care`}
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedTreatment.content }} />
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-label="Back to treatments list"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Treatments
                </button>
                <a
                  href="tel:+918447646815"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Book a consultation for this treatment with Dr. Nikhil Kapoor"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
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

        .prose h3 {
          color: #2563eb;
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          color: #374151;
        }

        @media (max-width: 640px) {
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .gap-6 {
            gap: 1.5rem;
          }

          .max-w-3xl {
            max-width: calc(100vw - 2rem);
          }

          .p-6 {
            padding: 1rem;
          }

          .h-64 {
            height: 12rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-modal-slide-in {
            animation: none;
          }
        }

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

          .text-teal-600 {
            color: #000;
          }
        }

        @media print {
          .fixed,
          button,
          a {
            display: none;
          }

          .bg-gradient-to-b,
          .bg-gradient-to-r {
            background: #fff;
            color: #000;
          }
        }

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

        button:focus-visible,
        [role="button"]:focus-visible,
        a:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default PhysioTreatments;