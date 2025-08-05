
        // User data storage
        let userData = {
            fullName: '',
            email: '',
            phone: '',
            profession: '',
            city: '',
            isLoggedIn: false
        };

        // Show create account form
        function showCreateAccountForm() {
            document.getElementById('modalOverlay').classList.add('active');
            document.getElementById('formModal').style.display = 'block';
            document.getElementById('profileSection').style.display = 'none';
        }

        // Show profile
        function showProfile() {
            if (userData.isLoggedIn) {
                document.getElementById('modalOverlay').classList.add('active');
                document.getElementById('formModal').style.display = 'none';
                document.getElementById('profileSection').style.display = 'block';
                updateProfileDisplay();
            } else {
                showCreateAccountForm();
            }
        }

        // Close modal
        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
        }

        // Update profile display
        function updateProfileDisplay() {
            document.getElementById('profileName').textContent = userData.fullName;
            document.getElementById('profileEmail').textContent = userData.email;
            document.getElementById('profilePhone').textContent = userData.phone;
            document.getElementById('profileProfession').textContent = userData.profession;
            document.getElementById('profileCity').textContent = userData.city;
            document.getElementById('profileAvatar').textContent = userData.fullName.charAt(0).toUpperCase();
            document.getElementById('profileDate').textContent = new Date().toLocaleDateString();
        }

        // Handle form submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Save form data
            userData.fullName = document.getElementById('fullName').value;
            userData.email = document.getElementById('email').value;
            userData.phone = document.getElementById('phone').value;
            userData.profession = document.getElementById('profession').value;
            userData.city = document.getElementById('city').value;
            userData.isLoggedIn = true;

            // Show success animation
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.textContent = 'Account Created! ✓';
            submitBtn.style.background = '#28a745';

            setTimeout(() => {
                closeModal();
                showHomePage();
            }, 1500);
        });

        // Show home page
        function showHomePage() {
            document.getElementById('landingPage').classList.add('hidden');
            document.getElementById('homePage').classList.add('active');
            document.getElementById('homeUserName').textContent = userData.fullName;
            document.getElementById('profileBtn').style.display = 'block';
        }

        // Close modal when clicking outside
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Form inputs retain values
        const formInputs = ['fullName', 'email', 'phone', 'profession', 'city'];
        formInputs.forEach(inputId => {
            document.getElementById(inputId).addEventListener('input', function() {
                userData[inputId] = this.value;
            });
        });
    